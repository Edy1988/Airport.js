describe('Airport', function(){
  it('is empty until plane lands', function(){
    airport = new Airport();
    expect(airport.planes.length).toEqual(0);
  })

  it('can instruct plane to take off', function(){
    airport = new Airport();
    plane = new Plane()
    airport.land(plane)
    airport.takeOff(plane)
    expect(airport.planes).not.toContain(plane)
  })
})
