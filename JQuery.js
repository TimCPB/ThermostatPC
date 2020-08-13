$( document ).ready(function() {
  $( "#temperature-up" ).click(function( event ) {
      alert( "It's getting warmer!" );
  });
  $( "#temperature-down" ).click(function( event ) {
      alert( "It's getting cooler!" );
  });

  $("#current-temp").css("color", "red")

 
 });
