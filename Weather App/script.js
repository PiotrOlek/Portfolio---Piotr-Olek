const apiKey = '1814f349548e6d889bae14b024dc5b4f'; // Uzupełnij swoim kluczem API z OpenWeatherMap

const locationForm = document.getElementById('location-form');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const weatherInfo = document.getElementById('weather-info');

locationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const city = document.getElementById('city-input').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pl`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('Nie znaleziono miasta. Spróbuj ponownie.');
                return;
            }
            cityName.textContent = data.name;
            temperature.textContent = `${data.main.temp.toFixed(1)}°C`;
            description.textContent = data.weather[0].description;

            weatherInfo.classList.add('visible');
        })
        .catch(error => {
            alert('Wystąpił błąd. Spróbuj ponownie.');
            console.error(error);
        });
});
