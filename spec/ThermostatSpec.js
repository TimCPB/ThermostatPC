describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("Starts at 20 degrees", function() {
    expect(thermostat.defaultTemperature).toEqual(20);
  });

  it ("can increase the temperature", function() {
    thermostat.up()
    expect(thermostat.defaultTemperature).toEqual(21);
  });

  it ("can decrease the temperature", function() {
    thermostat.down()
    expect(thermostat.defaultTemperature).toEqual(19);
  });

  it ("has a min temperture of 10", function() {
    for(let i = 0; i < 11; i++){
    thermostat.down()
    }
    expect(thermostat.defaultTemperature).toEqual(10);
  });

  it ("power saving mode prevents temp rise above 25", function(){
    for(let i = 0; i < 6; i++){
      thermostat.up()
    }
    expect(thermostat.defaultTemperature).toEqual(25);
  });
});
