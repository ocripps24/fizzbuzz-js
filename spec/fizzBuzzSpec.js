describe('fizzBuzz', function() {

  let fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new fizzBuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('divisible by multiples of 3', function() {
      expect(fizzbuzz.isDivisibleByThree(6)).toBe(true);
    });

    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by multiples of 5', function() {
      expect(fizzbuzz.isDivisibleByFive(10)).toBe(true);
    });

  });

  describe('knows when a number is', function() {

    it('not divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('not divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(4)).toBe(false);
    });

  });

});
