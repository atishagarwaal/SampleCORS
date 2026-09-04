# SampleCORS

## 1. Overview

SampleCORS is a small example project that demonstrates configuring CORS for a .NET 10 Web API and a simple JavaScript client.

## 2. Description

The solution contains two projects:
- SampleAPI: a .NET 10 Web API that shows how to configure CORS policies.
- JavascriptClient: a minimal static JavaScript client that calls the API.

This repository is intended as a minimal reproducible example for CORS-related scenarios.

## 3. Pre-requisites

- .NET 10 SDK installed (dotnet CLI)
- Visual Studio 2026 or Visual Studio Code (optional)
- Git (optional)
- A modern web browser for the JavaScript client

## 4. Build and Run

From the repository root:

1. Build the solution

   dotnet build ./SampleCORS.slnx

2. Run the API project

   dotnet run --project ./SampleAPI/SampleAPI.csproj

   The API will start and listen on the configured URL (http://localhost:5201).

3. Run the JavaScript client

   dotnet run --project ./JavascriptClient/JavascriptClient.csproj

   The Index .html file will be served, and you can open it in a web browser to test the API calls.

 ## 5. CORS Configuration

 The CORS configuration is set up in the SampleAPI project. The `Program.cs` file contains the necessary middleware to allow cross-origin requests from the JavaScript client.

 It allows requests from http://localhost:5099 and supports common HTTP methods like GET, POST, PUT, and DELETE.