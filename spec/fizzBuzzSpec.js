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

    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true);
    });

    it('divisible by multiples of 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(30)).toBe(true);
    });

  });

  describe('knows when a number is', function() {

    it('not divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('not divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(4)).toBe(false);
    });

    it('not divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(17)).toBe(false);
    });

  });

  describe('when playing, says', function() {

    it('"FizzBuzz" when a number is divisible by 15', function() {
      expect(fizzbuzz.says(15)).toEqual("Fizzbuzz");
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(fizzbuzz.says(5)).toEqual("Buzz");
    });

    it('"Fizz" when a number is divisible by 3', function() {
      expect(fizzbuzz.says(3)).toEqual("Fizz");
    });

  });

});
