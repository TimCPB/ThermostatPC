class Thermostat {
  constructor(){
    this.currentTemperature = 20
    this.minimumTemp = 10
    this.maximumTemp = 32
    this.powerSaveMaxTemp = 25
    this.powerSaveMode = true
  };

  up(){
    if(this.powerSaveMode === true && this.currentTemperature < this.powerSaveMaxTemp){
    this.currentTemperature++;
    }
    else if(this.powerSaveMode === false && this.currentTemperature < this.maximumTemp){
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