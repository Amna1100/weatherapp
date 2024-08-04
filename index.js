const apiKey="834bf25753669b5be5ab6b5463dbb27b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";


// when the user click on button the borwser will request the datas from input 

async function checkweather(city){
 const weatherIcone=document.getElementById("ima")
const response=await fetch(apiUrl+`&appid=${apiKey}`+`&q=${city}`);
var data=await response.json();
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temparature").innerHTML= Math.round(data.main.temp) +"°C";
  document.querySelector(".weather-detailes .humidity span").innerHTML=data.main.humidity+"%";
document.querySelector(".weather-detailes  .wind span").innerHTML=data.wind.speed+"km/h";
console.log(data);

if(data.weather[0].main=="Clouds")
{
    weatherIcone.src="clouds.png";
}
else if(data.weather[0].main=="Clear")
{
    
  weatherIcone.src="clear.png";
}

else if(data.weather[0].main=="Rain")
{
       weatherIcone.src="rain.png";
}
else if(data.weather[0].main=="Drizzle")
{
 weatherIcone.src="drizzle.png";
 }
else if(data.weather[0].main=="Mist")
{
    weatherIcone.src="mist.png";
}
document.querySelector(".container").style.height="500px";
  document.querySelector(".weather-box").style.display="block";
 
}




