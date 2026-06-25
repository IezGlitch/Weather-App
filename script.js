function getWeather() {
  let city = document.getElementById("city").value;
  let apiKey = "de0aa111d94d9bc70c0ee87272600d91";
  let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("error").innerText = "";
      document.getElementById("cityName").innerText = data.name;
      document.getElementById("temp").innerText = "Temperature: " + data.main.temp + "°C";
      document.getElementById("condition").innerText = "Condition: " + data.weather[0].main;
      document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
      document.getElementById("wind").innerText = "Wind Speed: " + data.wind.speed + " m/s";
    })
    .catch(error => {
      document.getElementById("result").innerHTML = "";
      document.getElementById("error").innerText = "City not found";
    });
}