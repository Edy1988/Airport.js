describe('Plane', function(){
  it('can land at the airport', function(){
    plane = new Plane();
    airport = new Airport();

    airport.land(plane)

    expect(airport.planes).toContain(plane);
  })
})
