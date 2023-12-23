using Microsoft.AspNetCore.Authentication.JwtBearer;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
  options.AddPolicy("CorsPolicy", builder =>
    builder.AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());
});

builder.Services.AddReverseProxy()
    .LoadFromConfig(builder.Configuration.GetSection("ReverseProxy"));

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
      options.Authority = builder.Configuration["IdentityServiceUrl"];
      options.RequireHttpsMetadata = false;
      options.TokenValidationParameters.ValidateAudience = false;
      options.TokenValidationParameters.NameClaimType = "username";
    });

var app = builder.Build();

app.UseCors(builder => builder
  .AllowAnyOrigin()
  .AllowAnyMethod()
  .AllowAnyHeader()
  .WithExposedHeaders("*"));

//add cors
app.UseCors("CorsPolicy");

app.MapReverseProxy();

app.UseAuthentication();
app.UseAuthorization();

app.Run();