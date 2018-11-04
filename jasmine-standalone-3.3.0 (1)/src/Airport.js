function Airport(weather, capacity = 10){
  this.planes = [];

  this.land = function(plane){
    if (weather.isStormy()) return;
    if (this.planes.length === capacity) return;

    console.log("Planes: " + this.planes.length + " - Capacity: " + capacity);

    this.planes.push(plane);
  }

  this.takeOff = function(plane){
    if (weather.isStormy()) return;

    this.planes = this.planes.filter(element => (element !== plane));
  }

}
