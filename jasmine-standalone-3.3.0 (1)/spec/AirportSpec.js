describe('Airport', function(){
  it('is empty until plane lands', function(){
    airport = new Airport();
    expect(airport.planes.length).toEqual(0);
  })
})
