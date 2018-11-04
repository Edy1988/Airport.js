function Airport(){

  this.planes = [];

  this.land = function(plane){
    this.planes.push(plane);
  }

  this.takeOff = function(plane){
    this.planes = this.planes.filter(element => (element !== plane));
  }

}
