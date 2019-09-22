var wallpapers = [
    '../img/bg1.jpg',
    '../img/bg2.jpg',
    '../img/bg3.jpg',
    '../img/bg4.jpg',
    '../img/bg5.jpg',
    '../img/bg6.jpg',
];
var randomWallpaper = Math.floor(Math.random()*wallpapers.length);
document.querySelector('.wrapper').style.backgroundImage = "url('"+wallpapers[randomWallpaper]+"')";