const fizzBuzz = function() {};

fizzBuzz.prototype.isDivisibleByFifteen = function(number) {
  return (number % 15 === 0);
};

fizzBuzz.prototype.isDivisibleByFive = function(number) {
  return (number % 5 === 0);
};

fizzBuzz.prototype.isDivisibleByThree = function(number) {
  return (number % 3 === 0);
};
