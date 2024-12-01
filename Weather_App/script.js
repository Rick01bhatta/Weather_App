const apiKey="33f1918847ab75bb303d03edf498f003";
const URL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weatherIcon");


async function checkWeather(city){
    const response= await fetch( URL + city+ `&appid=${apiKey}`);
    const data= await response.json();
   console.log(data);
   if(!response.ok){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
   }
   else{
    document.querySelector(".city").innerHTML=data.name ;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML=Math.round(data.main.humidity)+'%';
    document.querySelector(".wind").innerHTML=Math.round(data.wind.speed)+'kmph';
  
    if(data.weather[0].main=="Rain"){
        weatherIcon.src="rain.png";
    }
     else if(data.weather[0].main==="Clear"){
        weatherIcon.src="clear.png";
    }
    else if(data.weather[0].main==="Clouds"){
        weatherIcon.src="clouds.png";
    }
    else if(data.weather[0].main==="Drizzle"){
        weatherIcon.src="drizzle.png";
    }
    else if(data.weather[0].main==="Mist"){
        weatherIcon.src="mist.png";
    }
    else if(data.weather[0].main==="Snow"){
        weatherIcon.src="snow.png";
    }
    
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
   }

   


}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
