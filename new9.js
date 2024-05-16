// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = 'YOUR_API_KEY';

// Replace 'CITY_NAME' with the name of the city you want to fetch weather for
const city = 'CITY_NAME';

// API endpoint for weather data
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// Fetching weather data
fetch(apiUrl)
  .then(response => {
    // Check if response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse response as JSON
    return response.json();
  })
  .then(data => {
    // Display weather data
    console.log(data);
    // Example: Log the temperature
    console.log(`Temperature: ${data.main.temp} Kelvin`);
  })
  .catch(error => {
    // Log any errors
    console.error('There was a problem with your fetch operation:', error);
  });
