const apiKey = "0ad1c9b9d96ec3daf713ac7f149f003b"; // Your API key

document.getElementById("getWeatherBtn").addEventListener("click", async () => {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data); // Debug: see the API response

    if (Number(data.cod) !== 200) {
      alert(`Error: ${data.message}`);
      return;
    }

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temp").innerText = data.main.temp;
    document.getElementById("humidity").innerText = data.main.humidity;
    document.getElementById("wind").innerText = data.wind.speed;

    document.getElementById("weatherResult").classList.remove("hidden");
  } catch (error) {
    alert("Error fetching data. Try again later.");
    console.error(error);
  }
});
