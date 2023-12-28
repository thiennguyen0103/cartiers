# get base dotnet image to work
FROM mcr.microsoft.com/dotnet/sdk:7.0 as build

# set working directory
WORKDIR /app

# define network ports that this container will listen on at runtime.
EXPOSE 80

# copy all .csproj files and restore as distinct layer.
# user of the same COPY command for every dockerfile in the project
# to take advantage of docker caching.
COPY Carties.sln Carties.sln
COPY src/AuctionService/AuctionService.csproj src/AuctionService/AuctionService.csproj
COPY src/SearchService/SearchService.csproj src/SearchService/SearchService.csproj
COPY src/BiddingService/BiddingService.csproj src/BiddingService/BiddingService.csproj
COPY src/GatewayService/GatewayService.csproj src/GatewayService/GatewayService.csproj
COPY src/Contracts/Contracts.csproj src/Contracts/Contracts.csproj
COPY src/IdentityService/IdentityService.csproj src/IdentityService/IdentityService.csproj

# restore package dependencies
RUN dotnet restore Carties.sln

# copy app folders over
COPY src/GatewayService src/GatewayService
WORKDIR /app/src/GatewayService
RUN dotnet publish -c Release -o /app/src/out

# build run time image
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=build /app/src/out .
ENTRYPOINT [ "dotnet", "GatewayService.dll" ]