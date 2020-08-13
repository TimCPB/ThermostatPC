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
      console.log(thermostat.powerSaveMode)
  })

  function updateTemperature(){
      $('#temperature').text(thermostat.currentTemperature).css("color", thermostat.currentUsage())
    }

 });


