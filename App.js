
//Api key :2435645530336268f604e801523b62c4
const API = "dfa47bd33e07e9f2b6419d08052782d7",
const DefaultPlace="delhi";
const CheckCity="india";

const WeatherContainer= document.querySelector(".Weather_Condition")
const CurrentDate = document.queryselector("Date");
const CurrentTime = document.queryselector("Time");
const City = document.queryselector("Place_Name");
const SearchCity = document.queryselector("Search_Place");
const SearchButton = document.queryselector("SearchButton");
const Temperature = document.queryselector("Temperature");
const Condition = document.queryselector("Condition");
const Humidity = document.queryselector("Humidity");
const WindSpeed = document.queryselector("WindSpeed");
const ErrorMsg = document.queryselector("ErrorMsg");


let Day1 = document.getElementById("Day1")
let Day1Temperature = document.getElementById("Day1Temperature");
let Day1Humidity = document.getElementById("Day1Humidity");
let Day1Wind = document.getElementById("Day1Wind");
let Day1ConditionBox = document.getElementById("Day1Condition");

let Day2 = document.getElementById("Day2")
let Day2Temperature = document.getElementById("Day2Temperature");
let Day2Humidity = document.getElementById("Day2Humidity");
let Day2Wind = document.getElementById("Day2Wind");
let Day2ConditionBox = document.getElementById("Day2Condition");

let Day3 = document.getElementById("Day3")
let Day3Temperature = document.getElementById("Day3Temperature");
let Day3Humidity = document.getElementById("Day3Humidity");
let Day3Wind = document.getElementById("Day3Wind");
let Day3ConditionBox = document.getElementById("Day3Condition");

let Day4 = document.getElementById("Day4")
let Day4Temperature = document.getElementById("Day4Temperature");
let Day4Humidity = document.getElementById("Day4Humidity");
let Day4Wind = document.getElementById("Day4Wind");
let Day4ConditionBox = document.getElementById("Day4Condition");

let Day5 = document.getElementById("Day5")
let Day5Temperature = document.getElementById("Day5Temperature");
let Day5Humidity = document.getElementById("Day5Humidity");
let Day5Wind = document.getElementById("Day5Wind");
let Day5ConditionBox = document.getElementById("Day5Condition");

let Day6 = document.getElementById("Day6")
let Day6Temperature = document.getElementById("Day6Temperature");
let Day6Humidity = document.getElementById("Day6Humidity");
let Day6Wind = document.getElementById("Day6Wind");
let Day6ConditionBox = document.getElementById("Day6Condition");

let Day7 = document.getElementById("Day7")
let Day7Temperature = document.getElementById("Day7Temperature");
let Day7Humidity = document.getElementById("Day7Humidity");
let Day7Wind = document.getElementById("Day7Wind");
let Day7ConditionBox = document.getElementById("Day7Condition");

let ConditionIconBox = document.getElementById("ConditionIcon");

SearchButton.addEventListener('click', (event) =>{
    let len = SearchCity.value 
    if(SearchCity.value.match(CheckCity) && len.length != 0){
        GetWeather(SearchCity.value);
    }
    else{
        ErrorMsg.style.opacity = 1;
        ErrorMsg.innerHTML = "kindly Enter Valid Place Name!";
        ErrorMsg.style.backgroundcolor = "red";
        HideErrorMsg();
        SearchCity_focus();
        SearchCiy_value=``;
    
    }
})

const GetWeather = {city};

Weather.temperature = {
unit : "celsius"
}
    const KELVIN = 273;

    const key = "2435645530336268f604e801523b62c4";
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(setposition, showError);
    }else{
        notificationElement.style.display = "block";
        notificationElement.innerHTML = "<p>Browser doesn't support geoLocation</p>";
    }

    function setposition(position){
        let lattitude = position.coords.latitude;
        let longitude = position.coords.longitude;
    }
    getweather(latitude, longitude);

   function showError(error){
    notificationElement.stle.display = "block";
    notificationElement.innerHTML = '<p> ${error.message} </p>';
   }
 
   checkweather();

    function getweather(latitude, longitude){
    const apiurl= `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API}`;
    async function checkweather(){
        const response = await response.json();
        console.log(data);

    }


   fetch(api)
   .then(function(response){
    let data = response .json();
    return data;
   })

   .then(function(data){
       ErrorMsg.style.opacity = 1;
       ErrorMsg.style.backgroundcolor = "green";
       ErrorMsg.innerHTML = '${city}"s Weather_Details Show';
       HideErrorMsg();
       return ShowWeather(data)

   })
}

   .catch {() =>{
    ErrorMsg.style.opacity = 1;
    ErrorMsg.style.backgroundColor = "red";
    Error.innerHTML='${city} not found';
    SearchCity.focus();
    SearchCity.value=``;
    HideErrorMsg();
  }

   }


const ShowWeather = (WeatherData) =>{
  
    City.innerHTML='${WeatherData.location.country}';
    Temperature.innerHTML='${Weather.current.temp_c}';
    Condition.innerHTML='${WeatherData.current.country.text}';
    Humidity.innerHTML='${WeatherData.current.humidity}';
    WindSpeed.innerHTML='${WeatherData.current.wind_kph}';
    ConditionIconBox.innerHTML='<img src="${WeatherData.current.condition.icon}"alt="Condition-Icon">'

    Day1.innerHTML = '${WeatherData.forecast.forecastday[1].date}';
    Day1ConditionBox.innerHTML = '<p>Condition<span>${WeatherData.forecast.forecastday[1].day.condition.text}</span> </p> <img src="${WeatherData.forecast.forecastday[1].day.condition.icon}" alt="Condition-Icon">'
    Day1Temperature.innerHTML = '${WeatherData.forecast.forecastday[1].day.avgtemp_c}'+"&deg;c";
    Day1Humidity.innerHTML = '${WeatherData.forecast.forecastday[1].avghumidity}'+"&percnt;";
    Day1Wind.innerHTML = '${WeatherData.forecast.forecastday[1].day.maxtemp_c}'+"km/h";

    Day2.innerHTML = '${WeatherData.forecast.forecastday[2].date}';
    Day2ConditionBox.innerHTML = '<p>Condition<span>${WeatherData.forecast.forecastday[2].day.condition.text}</span> </p> <img src="${WeatherData.forecast.forecastday[2].day.condition.icon}" alt="Condition-Icon">'
    Day2Temperature.innerHTML = '${WeatherData.forecast.forecastday[2].day.avgtemp_c}'+"&deg;c";
    Day2Humidity.innerHTML = '${WeatherData.forecast.forecastday[2].avghumidity}'+"&percnt;";
    Day2Wind.innerHTML = '${WeatherData.forecast.forecastday[2].day.maxtemp_c}'+"km/h";
    
    Day3.innerHTML = '${WeatherData.forecast.forecastday[3].date}';
    Day3ConditionBox.innerHTML = '<p>Condition<span>${WeatherData.forecast.forecastday[3].day.condition.text}</span> </p> <img src="${WeatherData.forecast.forecastday[3].day.condition.icon}" alt="Condition-Icon">'
    Day3Temperature.innerHTML = '${WeatherData.forecast.forecastday[3].day.avgtemp_c}'+"&deg;c";
    Day3Humidity.innerHTML = '${WeatherData.forecast.forecastday[3].avghumidity}'+"&percnt;";
    Day3Wind.innerHTML = '${WeatherData.forecast.forecastday[3].day.maxtemp_c}'+"km/h";
    
    Day4.innerHTML = '${WeatherData.forecast.forecastday[4].date}';
    Day4ConditionBox.innerHTML = '<p>Condition<span>${WeatherData.forecast.forecastday[4].day.condition.text}</span> </p> <img src="${WeatherData.forecast.forecastday[4].day.condition.icon}" alt="Condition-Icon">'
    Day4Temperature.innerHTML = '${WeatherData.forecast.forecastday[4].day.avgtemp_c}'+"&deg;c";
    Day4Humidity.innerHTML = '${WeatherData.forecast.forecastday[4].avghumidity}'+"&percnt;";
    Day4Wind.innerHTML = '${WeatherData.forecast.forecastday[4].day.maxtemp_c}'+"km/h";

    Day5.innerHTML = '${WeatherData.forecast.forecastday[5].date}';
    Day5ConditionBox.innerHTML = '<p>Condition<span>${WeatherData.forecast.forecastday[5].day.condition.text}</span> </p> <img src="${WeatherData.forecast.forecastday[5].day.condition.icon}" alt="Condition-Icon">'
    Day5Temperature.innerHTML = '${WeatherData.forecast.forecastday[5].day.avgtemp_c}'+"&deg;c";
    Day5Humidity.innerHTML = '${WeatherData.forecast.forecastday[5].avghumidity}'+"&percnt;";
    Day5Wind.innerHTML = '${WeatherData.forecast.forecastday[5].day.maxtemp_c}'+"km/h";
    
    Day6.innerHTML = '${WeatherData.forecast.forecastday[6].date}';
    Day6ConditionBox.innerHTML = '<p>Condition<span>${WeatherData.forecast.forecastday[6].day.condition.text}</span> </p><img src="${WeatherData.forecast.forecastday[6].day.condition.icon}" alt="Condition-Icon">'
    Day6Temperature.innerHTML = '${WeatherData.forecast.forecastday[6].day.avgtemp_c}'+"&deg;c";
    Day6Humidity.innerHTML = '${WeatherData.forecast.forecastday[6].avghumidity}'+"&percnt;";
    Day6Wind.innerHTML = '${WeatherData.forecast.forecastday[6].day.maxtemp_c}'+"km/h";
    
    Day7.innerHTML = '${WeatherData.forecast.forecastday[7].date}';
    Day7ConditionBox.innerHTML = '<p>Condition<span>${WeatherData.forecast.forecastday[7].day.condition.text}</span> </p> <img src="${WeatherData.forecast.forecastday[7].day.condition.icon}" alt="Condition-Icon">'
    Day7Temperature.innerHTML = '${WeatherData.forecast.forecastday[7].day.avgtemp_c}' + "&deg;c";
    Day7Humidity.innerHTML = '${WeatherData.forecast.forecastday[7].avghumidity}' + "&percnt;";
    Day7Wind.innerHTML = '${WeatherData.forecast.forecastday[7].day.maxtemp_c}' + "km/h";
};

let SystemDate = new Date();
CurrentDate.innerHTML = SystemDate.getDate()+"/"+ (SystemDate.getMonth()=1) +"/"+mSystemDate.getFullYear();
function startTime() {
    const today = new Date();
    let h=today.getHours()
    let m=today.getMinutes();
    let s=today.getSeconds();
    m=checkTime(m);
    s=checkTime(s);
    CurrentTime.innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime,1000);

}
function checkTime(i){
    if (i<10){
        i = "0" + i
    };
    return i;
}

    function HideErrorMsg(){
        setTimeout(() => {
            ErrorMsg.style.opacity = 0;
        }, 5000);

        }
