class Thermostat {
  constructor(){
    this.defaultTemperature = 20
    this.minimumTemp = 10
  };

  up(){
    this.defaultTemperature++;
  }

  down(){
    if(this.defaultTemperature > this.minimumTemp){
    this.defaultTemperature--;
    }
  }
}