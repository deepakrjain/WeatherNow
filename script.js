const apiKey='ZYWBM2K363JPJ63XX8J7UBHPX';
const apiUrl="https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
var form = document.getElementById("form");
var locationInput = document.getElementById("locationInput");
form.addEventListener("submit",function(event){
    event.preventDefault();
    checkWeather();
    async function checkWeather() {
        const location = locationInput.value;
        const response = await fetch(`${apiUrl}/${location}?key=${apiKey}`);
        var data = await response.json();   
        document.querySelector("#city").innerHTML = data.resolvedAddress;
        document.querySelector("#coordinates").innerHTML = "Latitude : "+data.latitude+"<br><br> Longitude : "+data.longitude;
        document.querySelector("#conditions").innerHTML = data.currentConditions.conditions;
        document.querySelector("#temp").innerHTML = Math.round(((data.currentConditions.temp-32)*(5/9)))+"<sup>o</sup> C";
        document.querySelector("#precip").innerHTML = "Precipitation : "+Math.round(data.currentConditions.precip)+"%<br><br>Precipitation probability : "+Math.round(data.currentConditions.precipprob)+"%";
        document.querySelector("#icon").style.width = "150px";
        document.querySelector("#icon").style.height = "150px";
        document.querySelector("#icon").src = `assets/${data.currentConditions.icon}.png`;
        document.querySelector("#description").innerHTML = "Description : "+data.description;
    }
})