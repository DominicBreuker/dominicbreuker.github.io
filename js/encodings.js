function ipTransform(input, transformFuncs) {
    let numbers = input.split(".").map(o => parseNumber(o)).filter(o => o != null);
    if (numbers.length != 4) {
        return "";
    }
    
    const numNumbers = transformFuncs.length;
    if (numNumbers < 4) {
        let tmp = [];
        for (let i = 0; i <= 4 - numNumbers; i++) {
          tmp.push(numbers.pop());
        }
        let num = 0;
        for (let i = 0; i <= 4 - numNumbers; i++) {
          num += tmp[i] * (Math.pow(256, i));
        }
        numbers.push(num);
    }
    
    for (let i = 0; i < numNumbers; i++) {
        numbers[i] = transformFuncs[i](numbers[i]);
    }
    return numbers.join(".");
}

function parseNumber(o) {
    if ((o == null) || (o === "")) {
        return null;
    }
    const out = Number(o);

    if (isNaN(out) || (out < 0) || (out > 255)) {
        return null;
    }

    return out;
}

function decimalTransform(o) {
    return o.toString(10);
}

function hexTransform(o, n) {
    return "0x" + "0".repeat(n) + o.toString(16);
}

function makeHexTransform(n) {
  return function(o) {
      return hexTransform(o, n);
  }
}

function octalTransform(o, n) {
    return "0" + "0".repeat(n) + o.toString(8);
}

function makeOctalTransform(n) {
    return function(o) {
        return octalTransform(o, n);
    }
}
