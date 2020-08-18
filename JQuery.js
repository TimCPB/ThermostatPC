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

    function outsideTemp(){
  $.get("http://api.openweathermap.org/data/2.5/weather?q=London&appid=c2d102055ae8d191cb13bfd37d12059d", 
  function(data){
      outsideTemp = (Math.floor(data.main.temp - 273.15))
  })

  return (outsideTemp)
}

  function updateTemperature(){
      $('#temperature').text(thermostat.currentTemperature).css("color", thermostat.currentUsage())
    }



 });


