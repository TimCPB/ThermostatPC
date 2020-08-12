class Thermostat {
  constructor(){
    this.defaultTemperature = 20
    this.minimumTemp = 10
    this.powerSaveModeOn = 25
  };

  up(){
    if(this.defaultTemperature < this.powerSaveModeOn){
    this.defaultTemperature++;
    }
  }

  down(){
    if(this.defaultTemperature > this.minimumTemp){
    this.defaultTemperature--;
    }
  }
}