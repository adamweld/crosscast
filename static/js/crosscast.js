function myFunction(x) {
    let d = new Date();
    alert("Current datetime: " + d + "\nYou passed in: " + x);
}

function getWeatherUrl(lat, long, hour) {

}

function addimage(id) {
    var img = new Image();
    img.src = "https://www.google.com/images/srpr/logo4w.png"
    img_home.appendChild(img);
    document.getElementById(id).src = img.src
}
