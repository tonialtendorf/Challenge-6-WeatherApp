function GetInfo(){
    const newName= document.getElementById("cityInput");
    const cityName= document.getElementById("cityName");
    cityName.innerHTML = newName.value





//API 5 day weather input
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=f1ababfab952dd503c1fa036d5b7873a')
.then(response => response.json())
.then(data =>{


    //pulling min temp
    for(i=0; i<6; i++){
        document.getElementById("day" +(i+1)+ "Min").innerHTML ="Min: " + Number(data.list[i].main.temp_min).toFixed(1)+"°";
    }

    //pulling max temp
    for(i=0; i<6; i++){
        document.getElementById("day" +(i+1)+ "Max").innerHTML ="Max: " + Number(data.list[i].main.temp_max).toFixed(1)+"°";
    }
     //pulling humidity
     for(i=0; i<6; i++){
        document.getElementById("day" +(i+1)+ "Humidity").innerHTML ="Humidity: " + Number(data.list[i].main.humidity);
     }
      //pulling wind speed
    for(i=0; i<6; i++){
       document.getElementById("day" +(i+1)+ "Wind").innerHTML ="Wind: " + Number(data.list[i].wind.speed);
    }

    //pulling weather icon
    for(i=0; i<6; i++){
        document.getElementById("img" +(i+1)).src ="http://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon+".png";
    }
    console.log(data)


})

//if the load does not work
.catch(err => alert("Something Went Wrong"))
}

//array for days of week for 5 day weather
const d = new Date();
const weekday =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function CheckDay(day) {
    if(day + d.getDay() > 6) {
        return day + d.getDay()-7;
    }
    else{
        return day + d.getDay();
    }
}

for(i=0; i < 6; i++){
    document.getElementById("day"+(i+1)).innerHTML = weekday[CheckDay(i)];
}


//localStorage
/*

const btn = document.querySelector('.btn');
const searchCity = document.getElementById('inputContainer');
const lsOutput = document.querySelector(".lsOutput");

btn.onclick = function() {
    const key = searchCity.value;
    console.log(key);

    if (key) {
        localStorage.setItem(key);
        location.reload();
    }
};


for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    //const value = localStorage.getItem(key);
    
    lsOutput.innerHTML += `${key}: ${value}<br />`;
}

*/






























/*
//variables
const APIKey = "eb23e19b9a1a5041787f2931574a32f1"
var cityInput = document.querySelector('#cityInput');
var submitBtn = document.querySelector('#search');
var city = document.querySelector('#cityOutput');
var state;
var country;

//var queryURL = 'http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid" + APIKey';
//var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={APIKey}";


//city search button outputs weather
submitBtn.addEventListener('click', function() {
    let response = fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={APIKey}')
    .then(response => response.json())
    console.log(response)
    //.then(data => {
   submitBtn.addEventListener("click", function() {
    let response = fetch ('"https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=" + APIKey')
    .then(response => response.json())  
    console.log(response)  
    
}) 
    })
//}
//)
*/
