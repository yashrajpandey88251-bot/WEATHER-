let p = fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true"
);

p.then(response => response.json())
 .then(data => {
     document.getElementById("temp").innerHTML =
        "Temperature: " + data.current_weather.temperature + "°C";

     document.getElementById("wind").innerHTML =
        "Wind Speed: " + data.current_weather.windspeed + " km/h";
 });
