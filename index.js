function add(...number) {
  var sum = 0;
  for (i = 0; i < number.length; i++) {
    if (typeof number[i] != 'number') {
      return ["error", 0];
    } else {
      sum = sum + number[i];
    }
    
  }
  return ["succes", sum];
}
function subtract(...number) {
  var value = 0;
  for (i = 0; i < number.length; i++) {
    if (typeof number[i] != 'number') {
      return ["error", 0];
      break;
    } else {
      value = value - number[i];
    }
  }
  return ["succes", value];
}
function multiply(...number) {
  var value2 = 1;
  for (i = 0; i < number.length; i++) {
    if (typeof number[i] != 'number') {
      return ["error", 0];
    } else {
      value2 = value2 * number[i];
    }
  }
  return ["succes", value2];
}
function divide(...number) {
  var divide = number[0];
  for (i = 1; i < number.length; i++) {
    if (typeof number[i] != 'number') {
      return ["error", 0];
    } else {
      divide = divide / number[i];
    }
  }
  return ["succes", divide];
}
function ceils(...number) {
  var ceil1 = number[0];
  for (i = 1; i < number.length; i++) {
    if (typeof number[i] != NaN) {
      return ["error", 0];
      break;
    } else {
      ceil1 = ceil1 / number[i];
    }
  }
  return ["succes", Math.ceil(ceil1)];
}
function floors(...number) {
  var floor1 = number[0];
  for (i = 1; i < number.length; i++) {
    if (typeof number[i] != NaN) {
      return ["error", 0];
    } else {
      floor1 = floor1 / number[i];
    }
  }
  return ["succes", Math.floor(floor1)];
}
function factory(functionName) {
  switch (functionName) {
    case "add":
      return add;
    case "subtract":
      return subtract;
    case "multiply":
      return multiply;
    case "divide":
      return divide;
    case "ceils":
      return ceils;
    case "floors":
      return floors;
    default:
      return function () {
        console.log("Invalid function name");
      };
  }
}


