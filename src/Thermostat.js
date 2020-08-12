class Thermostat {
  constructor(){
    this.currentTemperature = 20
    this.minimumTemp = 10
    this.powerSaveModeOn = 25
  };

  up(){
    if(this.currentTemperature < this.powerSaveModeOn){
    this.currentTemperature++;
    }
  }

  down(){
    if(this.currentTemperature > this.minimumTemp){
    this.currentTemperature--;
    }
  }
}