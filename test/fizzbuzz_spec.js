var should = chai.should()

describe('FizzBuzz', function () {
  it('should input number can be divided by 3, then return Fizz', function () {
    var result = fizzBuzz(6)
    result.should.be.equal('Fizz')
  })
  it('should input number can be divided by 5, then return Buzz', function () {
    var result = fizzBuzz(10)
    result.should.be.equal('Buzz')
  })
  it('should input number can be both divided by 3 and 5, then return FizzBuzz', function () {
    var result = fizzBuzz(15)
    result.should.be.equal('FizzBuzz')
  })
  it('should input number can not be divided by 3 or 5, then return the number', function () {
    var result = fizzBuzz(4)
    result.should.be.equal(4)
  })
  it('should input string be illegal', function () {
    var result = fizzBuzz('30')
    result.should.be.equal('The input should be positive integer')
  })
  it('should input number be greater than 0', function () {
    var result = fizzBuzz(-1)
    result.should.be.equal('The input should be positive integer')
  })
})