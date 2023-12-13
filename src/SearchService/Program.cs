using System.Net;
using MassTransit;
using Polly;
using Polly.Extensions.Http;
using SearchService.Consumers;
using SearchService.Data;
using SearchService.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddHttpClient<AuctionSvcHttpClient>().AddPolicyHandler(GetPolicy());

// configure rabbitmq
builder.Services.AddMassTransit(x =>
{
  x.AddConsumersFromNamespaceContaining<AuctionCreatedConsumer>();

  x.SetEndpointNameFormatter(new KebabCaseEndpointNameFormatter("search", false));

  x.UsingRabbitMq((context, cfg) =>
  {
    cfg.ReceiveEndpoint("search-auction-created", e =>
    {
      e.UseMessageRetry(r => r.Interval(5, 5));

      e.ConfigureConsumer<AuctionCreatedConsumer>(context);
    });

    cfg.ConfigureEndpoints(context);
  });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseAuthorization();

app.MapControllers();

app.Lifetime.ApplicationStarted.Register(async () =>
{
  // connect and seed data into database
  try
  {
    await DbInitializer.InitDb(app);
  }
  catch (Exception e)
  {
    Console.WriteLine(e);
  }
});

app.Run();

// handle transient http error to constantly reconnect to auction services
static IAsyncPolicy<HttpResponseMessage> GetPolicy()
  => HttpPolicyExtensions.HandleTransientHttpError().OrResult(msg => msg.StatusCode == HttpStatusCode.NotFound).RetryForeverAsync(_ => TimeSpan.FromSeconds(3));