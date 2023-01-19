
var APIKey = "eb23e19b9a1a5041787f2931574a32f1"
var city;
var state;
var country;
var queryURL = 'http://api.openweathermap.org/geo/1.0/direct?q=" + city + state + country + "&appid" + APIKey';

fetch(queryURL)






/*
var cityInputEl = document.getElementById('cityInput');
var submitBtn = document.getElementById('add');
var city = document.getElementById('cityOutput');
var temp = document.getElementById('temp');
