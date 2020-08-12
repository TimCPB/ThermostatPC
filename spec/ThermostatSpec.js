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
});
