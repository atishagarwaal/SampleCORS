// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Build the API URI. The WeatherForecastController is routed at '/WeatherForecast'.
var uri = 'http://localhost:5201/WeatherForecast';

var ul_data = document.getElementById('ul_data');
if (ul_data) {
    fetch(uri)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok: ' + response.status);
            return response.json();
        })
        .then(data => showWeather(data))
        .catch(ex => console.error('Fetch error:', ex));
}

function showWeather(data) {
    // The API serializes properties to camelCase by default (date, temperatureC, summary)
    data.forEach(item => {
        const li = document.createElement('li');
        const text = `${item.date} — ${item.temperatureC}°C — ${item.summary}`;
        li.appendChild(document.createTextNode(text));
        ul_data.appendChild(li);
    });
}
