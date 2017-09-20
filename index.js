function countdown(callback){
  window.setTimeout(callback)
}

function createMultiplier(num){
  return function(num2){
    return num * num2
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(num1, num2){
  return num1 * num2
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
