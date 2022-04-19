function myFunction(x) {
    let d = new Date();
    alert("Current datetime: " + d + "\nYou passed in: " + x);
}

function createWeatherImg(lat, lon, hour, id) {
    var image = document.createElement("img");
    url = 'https://forecast.weather.gov/meteograms/Plotter.php?' +
    '&lat=' + lat +
    '&lon=' + lon +
    '&wfo=SEW&zcode=WAZ505&gset=20&gdiff=10&unit=0&tinfo=EY5' +
    '&ahour=' + hour +
    '&pcmd=111011111100000000000000000000000000000000000000000000000' + 
    '&lg=en&indu=1!1!1&dd=0&nocache=1650340298';
    image.src = url
    document.getElementById(id).appendChild(image);
    console.log(url);
}

function setImgUrl(lat, lon, hour, id) {
    var image = document.getElementById(id).src;
    image.src = `https://forecast.weather.gov/meteograms/Plotter.php?
    lat=${lat}
    &lon=${lon}
    &wfo=SEW&zcode=WAZ505&gset=20&gdiff=10&unit=0&tinfo=EY5
    &ahour=${hour}
    &pcmd=111011111100000000000000000000000000000000000000000000000
    &lg=en&indu=1!1!1&dd=0&nocache=1650340298`;
}