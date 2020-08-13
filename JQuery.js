$( document ).ready(function() {
  $( "#temperature-up" ).click(function( event ) {
      alert( "It's getting warmer!" );
  });
  $( "#temperature-down" ).click(function( event ) {
      alert( "It's getting cooler!" );
  });

  $("#temperature").css("color", "red")

  $("#powersaving-switch").click(function(event){
    $(this).css("color", "black")
  })
 
 });
