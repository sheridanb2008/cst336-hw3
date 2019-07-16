<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Your Area Weather</title>
  <link href="css/styles.css" rel="stylesheet" type="text/css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap" rel="stylesheet">
</head>
<body>
  <div id="block">
    <form id="weatherForm">
    <h1>Local Area Weather</h1>
    <h3>Enter your zip code to get your local weather.</h3>
  
    Zip Code:   <input class="input" type="text" name="zip" id="zip"><br>
    <div id="data">
    <span id="zipError"></span><br>  
    <span id="area"></span><br>
    <span id="latitude"></span><br>
    <span id="longitude"></span><br>
    <div id="iconBlock">     
      <span id="discription"></span><br>
      <div id="weatherIcon"></div>
    </div>        
    <span id="currentTemp"></span><br>  
    <span id="pressure"></span><br>  
    <span id="humidity"></span><br>    
    <span id="windSpeed"></span><br>      
    <span id="windDir"></span><br>      
    <span id="civil_twilight_begin"></span><br> 
    <span id="sunrise"></span><br> 
    <span id="sunset"></span><br>   
    <span id="civil_twilight_end"></span><br>   
    </div>   
    <input id ="submitBtn" type="button" value="Submit">
  <footer>    
  <div class="foot">
    <img id="f_img" src="img/CSUMB_Logo1.png" alt="CSUMB Logo"/>  
  </div>
  <div id="foot" id = "copyright">
    CST336 Internet Programming. 2019&copy; Sheridan <br />
    <strong> Disclaimer:</strong> The information in this webpage is fictitious. <br />
    It is used for academic purposes only.  
    </div>
    Surise/Sunset API by <a href="https://sunrise-sunset.org/api">Sunrise Sunset</a><br>
    Weather API by <a href="https://openweathermap.org/">OpenWeather</a>
   </footer>  
  </form>
    </div>
  <script src="js/weather.js"></script>
  
            
</body>
</html>