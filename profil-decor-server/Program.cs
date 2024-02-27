using AutoMapper;
using profil_decor_server.Interfaces;
using profil_decor_server.Mappings;
using profil_decor_server.Models.Context;
using profil_decor_server.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<ProfilDecorContext>();
builder.Services.AddScoped<IFAQService, FAQService>();
builder.Services.AddScoped<IAppConfigurationService, AppConfigurationService>();

var mappingConfig = new MapperConfiguration(mc =>
{
    mc.AddProfile(new AutoMapperProfiles());
});
builder.Services.AddSingleton(mappingConfig.CreateMapper());


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
