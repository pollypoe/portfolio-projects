const images = [];

images[0] = 'images/image1.jpg';
images[1] = 'images/image2.jpg';
images[2] = 'images/image3.jpg';
images[3] = 'images/image4.jpg';
images[4] = 'images/image5.jpg';
images[5] = 'images/image6.jpg';
images[6] = 'images/image7.jpg';
images[7] = 'images/image8.jpg';
images[8] = 'images/image9.jpg';
images[9] = 'images/image10.jpg';
images[10] = 'images/image11.jpg';
images[11] = 'images/image12.jpg';
images[12] = 'images/image13.jpg';
images[13] = 'images/image14.jpg';
images[14] = 'images/image15.jpg';
images[15] = 'images/image16.jpg';
images[16] = 'images/image17.jpg';
images[17] = 'images/image18.jpg';
images[18] = 'images/image19.jpg';
images[19] = 'images/image20.jpg';
images[20] = 'images/image21.jpg';
images[21] = 'images/image22.jpg';
images[22] = 'images/image23.jpg';
images[23] = 'images/image24.jpg';

window.onload = function() {
	const random = Math.floor(Math.random()* images.length);
	document.body.style.backgroundImage = `url(${images[random]})`;
}

const api = {
    key: "5509bb6f3060f8eace852963fea2b839",
    base: "https://api.openweathermap.org/data/2.5/",
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
}

function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let iconElement = document.querySelector('.weather-icon');
    const {icon} = weather.weather[0];
    iconElement.innerHTML = `<img src="icons/${icon}.png">`;
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°F / ${Math.round(weather.main.temp_max)}°F`;

    //convert main fahrenheit to celsius on click
    let newTemp = Math.round((Math.round(weather.main.temp) - 32) * (5/9));

    function tempChange() {
        if(temp.innerHTML === `${Math.round(weather.main.temp)}<span>°F</span>`) {
            document.getElementById("temp").innerHTML = `${newTemp}<span>°C</span>`;
        }
        else {
            document.getElementById("temp").innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;
        }
    }

    //convert hi/low fahrrenheit to celsius on click
    let lowTemp = Math.round((Math.round(weather.main.temp_min) - 32) * (5/9));
    let hiTemp = Math.round((Math.round(weather.main.temp_max) - 32) * (5/9));

    function hilowChange() {
        if(hilow.innerHTML === `${Math.round(weather.main.temp_min)}°F / ${Math.round(weather.main.temp_max)}°F`) {
            document.getElementById("hi-low").innerHTML = `${Math.round(lowTemp)}°C / ${Math.round(hiTemp)}°C`;
        }
        else {
            document.getElementById("hi-low").innerHTML = `${Math.round(weather.main.temp_min)}°F / ${Math.round(weather.main.temp_max)}°F`;
        }
    }

    document.getElementById("switch").addEventListener("click", tempChange);
    document.getElementById("switch").addEventListener("click", hilowChange);
}

function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
}
