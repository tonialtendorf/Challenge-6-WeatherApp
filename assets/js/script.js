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
        document.getElementById("day" +(i+1)+ "Min").innerHTML ="Min: " + Number(data.list[i].main.temp -273.15).toFixed(1)+"°C";
    }

    //pulling max temp
    for(i=0; i<6; i++){
        document.getElementById("day" +(i+1)+ "Max").innerHTML ="Max: " + Number(data.list[i].main.temp_max -273.15).toFixed(1)+"°C";
    }
     //pulling humidity
     for(i=0; i<6; i++){
        document.getElementById("day" +(i+1)+ "Humidity").innerHTML ="Humidity: " + Number(data.list[i].main.humidity)+"%";
     }
      //pulling wind speed
    for(i=0; i<6; i++){
       document.getElementById("day" +(i+1)+ "Wind").innerHTML ="Wind: " + Number(data.list[i].wind.speed)+"mph";
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

//array for days of week 
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

//event listener for search button
const btn = document.querySelector('.btn');
const box = document.querySelector('.box');
const history = document.querySelector('.history');

btn.addEventListener('click', function() {
    GetInfo();
    box.classList.remove('hidden');
})

//localStorage
const form = document.querySelector("#form");
const searchBar = document.querySelector("#cityInput");
const submitButton = document.querySelector(".btn");
const deleteButton = document.querySelector("#delete");
const ul = document.querySelector("#ul");
let recentSearches;

if (localStorage.recentSearches && localStorage.recentSearches != "") {
    recentSearches = JSON.parse(localStorage.recentSearches);
  } else {
    recentSearches = [];
  }
  
  const makeListItem = (text, parent) => {
    let listItem = document.createElement("li");
    listItem.textContent = text;
    listItem.className = "list-group-item";
    parent.appendChild(listItem);
  };
  
  recentSearches.forEach(element => {
    makeListItem(element, ul);
  });
  
  const isDuplicateValue = (arr, text) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == text) {
        return true;
      }
    }
  
    return false;
  };

  form.addEventListener("click", event => {
    event.preventDefault();
    if (
      searchBar.value == "" ||
      isDuplicateValue(recentSearches, searchBar.value)
    ) {
      return;
    } else {
      recentSearches.push(searchBar.value);
      makeListItem(searchBar.value, ul);
      localStorage.recentSearches = JSON.stringify(recentSearches);
      searchBar.value = "";
    }
  });
  
  deleteButton.addEventListener("click", () => {
    localStorage.clear();
    recentSearches = [];
    searchBar.value = "";

    let arr = document.querySelectorAll("li");
for (let i = 0; i < arr.length; i++) {
      arr[i].remove();
    }
  });



  //add event listener to search history item
  ul.addEventListener('click', function(event){
    event.preventDefault();
    cityInput.style.display.inline
    document.getElementById("cityName").value =  event.target.id;
     
});

document.getElementById("delete").addEventListener("click", restore, false);
function restore() {
  document.getElementById("delete").value = localStorage.getItem("delete");

}




