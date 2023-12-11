using System.Text.Json;
using MongoDB.Driver;
using MongoDB.Entities;
using SearchService.Models;

namespace SearchService.Data;

public class DbInitializer
{
  public static async Task InitDb(WebApplication app)
  {
    // connect to mongodb
    await DB.InitAsync("SearchDb", MongoClientSettings.FromConnectionString(app.Configuration.GetConnectionString("MongoDbConnection")));

    // add index for item table
    await DB.Index<Item>()
      .Key(x => x.Make, KeyType.Text)
      .Key(x => x.Model, KeyType.Text)
      .Key(x => x.Color, KeyType.Text)
      .CreateAsync();

    var count = await DB.CountAsync<Item>();

    if (count == 0)
    {
      Console.WriteLine("No data - will attempt to seed");
      // read file with path
      var itemData = await File.ReadAllTextAsync("Data/auctions.json");

      // add option
      var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };

      // get item list
      var items = JsonSerializer.Deserialize<List<Item>>(itemData, options);

      // save data into database
      await DB.SaveAsync(items);
    }
  }
}
