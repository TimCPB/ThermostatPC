class Thermostat {
  constructor(){
    this.currentTemperature = 20
    this.minimumTemp = 10
    this.maximumTemp = 25
    this.powerSaveMode = true
  };

  up(){
    if(this.powerSaveMode === true && this.currentTemperature < this.maximumTemp){
    this.currentTemperature++;
    }
  }

  down(){
    if(this.currentTemperature > this.minimumTemp){
    this.currentTemperature--;
    }
  }

  switchPowerSaveMode(){
    this.powerSaveMode = !this.powerSaveMode;
  }
}