$( document ).ready(function() {
    var thermostat = new Thermostat()
    $('#temperature').text(thermostat.currentTemperature);
  
  $( "#temperature-up" ).click(function( event ) {
      thermostat.up();
      // $('#temperature').text(thermostat.currentTemperature);
      updateTemperature()
  });
  $( "#temperature-down" ).click(function( event ) {
      thermostat.down();
      // $('#temperature').text(thermostat.currentTemperature);
      updateTemperature()
  });

  $( "#temperature-reset" ).click(function(event){
      thermostat.reset();
      updateTemperature();
  })

  $("#powersaving-switch").click(function(event){
    $(this).css("color", "black")
  })

  // when switch is clicked turn the text colour blue.

  $(".switch").click(function(event){
      thermostat.switchPowerSaveMode();
      event.preventDefault()
  })
  


    $("form").submit(function(event){
        let city =  $("#city").val();
        event.preventDefault()
        $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c2d102055ae8d191cb13bfd37d12059d`, 
        function(data){
          $("#outsideTemp").text(convertToCelsius(data.main.temp))
      
      }
      )
    })
    
    


  function updateTemperature(){
      $('#temperature').text(thermostat.currentTemperature).css("color", thermostat.currentUsage())
    }

 function convertToCelsius(num){
   return Math.floor(num - 273.15)
 }

 });


