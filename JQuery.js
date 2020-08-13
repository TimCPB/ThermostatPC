$( document ).ready(function() {
    var thermostat = new Thermostat()
    $('#temperature').text(thermostat.currentTemperature);
  
  $( "#temperature-up" ).click(function( event ) {
      thermostat.up();
      $('#temperature').text(thermostat.currentTemperature);
  });
  $( "#temperature-down" ).click(function( event ) {
      thermostat.down();
      $('#temperature').text(thermostat.currentTemperature);
  });

  $( "#temperature-reset" ).click(function(event){
      thermostat.reset();
      $('#temperature').text(thermostat.currentTemperature);
  })

  $("#powersaving-switch").click(function(event){
    $(this).css("color", "black")
  })

  // when switch is clicked turn the text colour blue.

  $(".switch").click(function(event){
      thermostat.switchPowerSaveMode();
  })
 
 });
