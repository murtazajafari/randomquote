// Random Wallpaper 

var wallpapers = [
    '../img/bg1.jpg',
    '../img/bg2.jpg',
    '../img/bg3.jpg',
    '../img/bg4.jpg',
    '../img/bg5.jpg',
    '../img/bg6.jpg',
    '../img/bg7.jpg',
    '../img/bg8.jpg',
    '../img/bg9.jpg',
    '../img/bg10.jpg'
];
var randomWallpaper = Math.floor(Math.random()*wallpapers.length);
document.querySelector('.wrapper').style.backgroundImage = "url('"+wallpapers[randomWallpaper]+"')";

// Random Quote 

var quotes = [
    {
        title: '"Do for this life as if you live forever, do for the afterlife as if you die tomorrow."',
        author: '- Imam Ali'
    },
    {
        title: '"Habits are easy to make but difficult to break."',
        author: '- Imam Hassan'
    },
    {
        title: '"Being thankful for a grace of God makes God reward you with another grace."',
        author: '- Imam Hussain'
    }
];
var randomQuote = Math.floor(Math.random()*quotes.length);
document.querySelector('.title').innerHTML = quotes[randomQuote].title;
document.querySelector('.author').innerHTML = quotes[randomQuote].author;

// Current Time 

var d = new Date();
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var hours = d.getHours();
var ampm = hours >= 12 ? 'AM' : 'PM';
hours = (hours % 12 ) || 12;
var dateTime = days[d.getDay()] + ', ' + months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear() + ' ' + hours + ':' + d.getMinutes() + ' ' + ampm;
document.querySelector('.current-time').innerHTML = dateTime;

// Search 

document.querySelector('.search-form').addEventListener('submit', function(e){
    e.preventDefault();

    var search = document.querySelector('input[name="search"]').value;
    if (search.length > 0){
        window.location.href = 'https://www.google.com/search?q=' + search;
    }
});