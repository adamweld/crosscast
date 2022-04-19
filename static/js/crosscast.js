function myFunction(x) {
    let d = new Date();
    alert("Current datetime: " + d + "\nYou passed in: " + x);
}

function getWeatherUrl(lat, long, hour) {
    var url = "https://forecast.weather.gov/meteograms/Plotter.php?lat=47.50421&lon=-122.00455&wfo=SEW&zcode=WAZ505&gset=20&gdiff=10&unit=0&tinfo=EY5&ahour=0&pcmd=111011111100000000000000000000000000000000000000000000000&lg=en&indu=1!1!1&dd=0&nocache=1650340298"
    return url
}