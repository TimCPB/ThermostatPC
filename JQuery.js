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

  $("#temperature").css("color", "red")

  $("#powersaving-switch").click(function(event){
    $(this).css("color", "black")
  })

  $( "#temperature")

 
 });
