function cpfValidator(num) {
  let cpfNumber = num.toString()
  if (cpfNumber.length != 11 ||
    cpfNumber === '00000000000' ||
    cpfNumber === '11111111111' ||
    cpfNumber === '22222222222' ||
    cpfNumber === '33333333333' ||
    cpfNumber === '44444444444' ||
    cpfNumber === '55555555555' ||
    cpfNumber === '66666666666' ||
    cpfNumber === '77777777777' ||
    cpfNumber === '88888888888' ||
    cpfNumber === '99999999999') {
      return false;   
  } else {
    let firsDigit = parseInt(cpfNumber[9]);
    let sum = 0;
    for (let i in cpfNumber) {
      if (i < 9) {
        sum = sum + parseInt(cpfNumber[i]) * (10 - i)
      }
    }
    console.log(sum);
    let result = (sum * 10) % 11
    console.log(result)
    if (result == 10 || result == 11) {
      result = 0;
    }
    if (firsDigit == result) {
      console.log('passou');
    }
  }
  return true;
}


cpfValidator(14762221856);
cpfValidator(99999999999);
cpfValidator(14762229832);
cpfValidator(17754510707);