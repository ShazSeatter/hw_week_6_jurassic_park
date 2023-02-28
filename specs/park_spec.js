const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinasour;

  beforeEach(function () {
    park = new Park('Jurassic Park', 20);
    dinasour = new Dinosaur ('t-rex', 'carnivore', 50);
  })

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20);
  });

  it('should have a collection of dinosaurs', function () {
    assert.deepStrictEqual(park.dinosaurs, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaurs(dinasour.species);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinasour.species]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    const dinasourNew = new Dinosaur('triceratops', 'herbivour', 30);
    park.addDinosaurs(dinasour.species);
    park.addDinosaurs(dinasourNew.species);
    park.removeDinasours(dinasour.species);

    //assert 
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinasourNew.species]); 
  });

  it('should be able to find the dinosaur that attracts the most visitors');
    const dinasour2 = new Dinosaur('triceratops', 'herbivour', 30);
    park.addDinosaurs(dinasour.guestsAttractedPerDay);
    park.addDinosaurs(dinasour2.guestsAttractedPerDay);
    // park.dinasours = [50, 30]
    const actual = park.dinasourWithMostVisitors()
    assert.deepStrictEqual(actual, 50)
  
  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
