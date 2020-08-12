class Thermostat {
  constructor(){
    this.defaultTemperature = 20
  };

  up(){
    this.defaultTemperature++;
  }

  down(){
    this.defaultTemperature--;
  }
}