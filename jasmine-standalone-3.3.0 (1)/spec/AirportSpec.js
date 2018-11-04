describe('Airport', function(){
  it('is empty until plane lands', function(){
    airport = new Airport();

    expect(airport.planes.length).toEqual(0);
  })

  it('can land at the airport if weather not stormy', function(){
    airport = new Airport({
      isStormy: function(){ return false; }
    });
    plane = new Plane();

    airport.land(plane)

    expect(airport.planes).toContain(plane);
  })

  it('can prevent landing if weather is stormy', function(){
    airport = new Airport({
      isStormy: function(){ return true; }
    });
    plane = new Plane();

    airport.land(plane);

    expect(airport.planes).not.toContain(plane)
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
    var weather = {
      isStormy: function(){ return false; }
    }

    airport = new Airport(weather);
    plane = new Plane();
    airport.land(plane);

    weather.isStormy = function(){ return true; }

    airport.takeOff(plane)

    expect(airport.planes).toContain(plane)
  })

})
