function Airport(weather){

  this.planes = [];

  this.land = function(plane){
    this.planes.push(plane);
  }

  this.takeOff = function(plane){
    if (weather.isStormy()) return;
    
    this.planes = this.planes.filter(element => (element !== plane));
  }

}
