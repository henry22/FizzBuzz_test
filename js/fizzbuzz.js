function fizzBuzz(num) {
  let str = ''

  if (typeof num !== 'number' || num < 0) {
    return 'The input should be positive integer'
  }

  if (num % 3 === 0) {
    str += 'Fizz'
  }
  if (num % 5 === 0) {
    str += 'Buzz'
  }
  if (str !== '') {
    return str
  } else {
    return num
  }
}