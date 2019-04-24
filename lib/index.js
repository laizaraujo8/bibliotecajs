// function pokemonBattle(pokemon1, pokemon2){
//   return "magikarp"
// }
//   module.exports.pokemonBattle = pokemonBattle;

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
  } else {
    let firsDigit = parseInt(cpfNumber[9]);
    let sum = 0;
    for (let i in cpfNumber) {
      if (i < 9) {
        sum = sum + parseInt(cpfNumber[i]) * (10 - i)
      }
    }
    console.log(sum);
    let result = (sum*10)%11
     console.log(result)
    if(firsDigit == result){
      console.log('passou');
    }
    
  }

}



cpfValidator(14762221856);
cpfValidator(99999999999);
cpfValidator(14762221832);