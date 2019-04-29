const fizzBuzz = function() {};

fizzBuzz.prototype.isDivisibleByFive = function(number) {
  return (number % 5 === 0);
};

fizzBuzz.prototype.isDivisibleByThree = function(number) {
  return (number % 3 === 0);
};
