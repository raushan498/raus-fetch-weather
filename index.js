

const apiKey = 'd8783e36ab3667b287c221afa55e16ac';

fetchweather("Bhopal");

export async function fetchweather(city){



const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const temperature = data.main.temp;
    console.log(`The temperature in ${city} is ${temperature}°C`);
  })
  .catch(error => {
    console.error('There was a problem fetching the temperature:', error);
  });
}