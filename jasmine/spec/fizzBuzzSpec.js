describe('FizzBuzzJS', function() {


    var fizzBuzz;

    beforeEach(function() {
      fizzBuzz = new FizzBuzz();
    });

    describe('knows when a number is divisible', function() {

      it('3 is divisible by 3', function() {
        expect(fizzBuzz._isDivisibleBy(3, 3)).toBe(true);
      });

      it('1 is NOT divisible by 3', function() {
        expect(fizzBuzz._isDivisibleBy(1, 3)).toBe(false);
      });

    });

    describe('fizz behaviour', function() {

      it('3 is a fizz', function() {
        expect(fizzBuzz.play(3, 3)).toBe("fizz");
      });

      it('6 is a fizz', function() {
        expect(fizzBuzz.play(6, 3)).toBe("fizz");
      });

    });

    describe('buzz behaviour', function() {

      it('5 is a buzz', function() {
        expect(fizzBuzz.play(5, 5)).toBe("buzz");
      });

      it('10 is a buzz', function() {
        expect(fizzBuzz.play(10, 5)).toBe("buzz");
      });

    });

    describe('fizzbuzz behaviour', function() {

      it('15 is a fizzbuzz', function() {
        expect(fizzBuzz.play(15, 3)).toBe("fizzbuzz");
      });

      it('30 is a fizzbuzz', function() {
        expect(fizzBuzz.play(30, 3)).toBe("fizzbuzz");
      });

    });

    describe('edge case behaviour', function() {
      it('1 for 1', function() {
        expect(fizzBuzz.play(1)).toEqual(1);
      });

      it('11 for 11', function() {
        expect(fizzBuzz.play(11)).toEqual(11);
      });
    });

});
