describe('Airport', function(){
  it('is empty until plane lands', function(){
    airport = new Airport();

    expect(airport.planes.length).toEqual(0);
  })

  it('can instruct plane to take off if weather not stormy', function(){
    airport = new Airport({
      isStormy: function(){ return false; }
    });
    plane = new Plane()
    airport.land(plane)

    airport.takeOff(plane)

    expect(airport.planes).not.toContain(plane)
  })

  it('can prevent take of if weather is stormy', function(){

    airport = new Airport({
      isStormy: function(){ return true; }
    });
    plane = new Plane();
    airport.land(plane);

    airport.takeOff(plane)

    expect(airport.planes).toContain(plane)
  })
})
