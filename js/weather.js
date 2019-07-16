$("#zip").on("click", function(){
  cleanSpace();
  $("#zipError").html("");
});
    // Check zip code
function checkZip(){
  cleanSpace();
  $("#zipError").html("");
  $.ajax({
    method: "get",
    async: false,
    url: "https://cst336.herokuapp.com/projects/api/cityInfoAPI.php",
    dataType: "json",
    data: {"zip" : $("#zip").val() },
    success: function(result,status,xhr) {
      if((xhr.responseText).trim() == "false") {
        zipOk = "false"  
      }else{
        $("#zipError").html("");
        $("#area").html("Weather for: " + result.city +" , " + result.state );
        zipOk = "true"  
      }}
    }) // ajax
  return zipOk;
}// zip

function getWeather (){    
  $.ajax({
     method: "get",
     url: "https://api.openweathermap.org/data/2.5/weather",
     dataType: "json",
     data: {"zip" : $("#zip").val(), units : "imperial", APPID : "8d9bcb73325d22092cb96bd38f7e4c36"},
     success: function(result,status) {
      $("#latitude").html("Latitude:" + result.coord.lat);
      $("#longitude").html("Longitude: " + result.coord.lon);
      $('#weatherIcon').html("<img src='http://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x.png'>");
      $("#discription").html(result.weather[0].main);
      $("#currentTemp").html("Current Temperature: " + (result.main.temp).toFixed(0) + " Deg F");
      $("#pressure").html("Current Pressure: " + (result.main.pressure / 33.864).toFixed(2) + " inHg");
      $("#humidity").html("Current Humidity: " + result.main.humidity + " %rh");
      $("#windSpeed").html("Current Wind: " + windConvert(result.wind.deg) + " "+ (result.wind.speed).toFixed(0) + " mph");        
      sunTime(result.coord.lat,result.coord.lon);
    }
})} // ajax

    
function sunTime(lat,lng){
  $.ajax({
    method: "get",
    url: "https://api.sunrise-sunset.org/json",
    dataType: "json",
    data: {"lat" : lat, "lng" : lng, formatted : 0},
    success: function(result,status) {
      var sunrise = new Date(result.results.sunrise).toLocaleTimeString();
      var sunset = new Date(result.results.sunset).toLocaleTimeString();
      var twilightStart = new Date(result.results.civil_twilight_begin).toLocaleTimeString();
      var twilightEnd = new Date(result.results.civil_twilight_end).toLocaleTimeString();
      $("#sunrise").html("Sunrise: " + sunrise);
      $("#civil_twilight_begin").html("Civil Twilight Begin: " + twilightStart);
      $("#civil_twilight_end").html("Civil Twilight End: " + twilightEnd);
      $("#sunset").html("Sunset: " + sunset);
}})}

function windConvert(deg){
  if (deg>11.25 && deg<33.75){
    return "NNE";
  }else if (deg>33.75 && deg<56.25){
    return "ENE";
  }else if (deg>56.25 && deg<78.75){
    return "E";
  }else if (deg>78.75 && deg<101.25){
    return "ESE";
  }else if (deg>101.25 && deg<123.75){
    return "ESE";
  }else if (deg>123.75 && deg<146.25){
    return "SE";
  }else if (deg>146.25 && deg<168.75){
    return "SSE";
  }else if (deg>168.75 && deg<191.25){
    return "S";
  }else if (deg>191.25 && deg<213.75){
    return "SSW";
  }else if (deg>213.75 && deg<236.25){
    return "SW";
  }else if (deg>236.25 && deg<258.75){
    return "WSW";
  }else if (deg>258.75 && deg<281.25){
    return "W";
  }else if (deg>281.25 && deg<303.75){
    return "WNW";
  }else if (deg>303.75 && deg<326.25){
    return "NW";
  }else if (deg>326.25 && deg<348.75){
    return "NNW";
  }else{
    return "N"; 
  }
}

function cleanSpace(){
  $("#area").html("");
  $("#latitude").html("");
  $("#longitude").html("");
  $('#weatherIcon').html("");
  $("#discription").html("");
  $("#currentTemp").html("");
  $("#pressure").html("");
  $("#humidity").html("");
  $("#windSpeed").html("");
  $("#sunrise").html("");
  $("#civil_twilight_begin").html("");
  $("#civil_twilight_end").html("");
  $("#sunset").html("");
  zipOk = "false"
}
// form validation
$("#submitBtn").on("click",function(){
  if (checkZip() == 'true') {
    getWeather();
  } else {
    $("#zipError").html("Zip Code Not Found!");
    $("#zipError").css("color","red");
    cleanSpace();
  }
});