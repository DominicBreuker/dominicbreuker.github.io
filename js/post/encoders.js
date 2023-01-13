function updateIPv4() {
    outputIPv4.value = '';
    outputIPv4.value += ipTransform(inputIPv4.value, [decimalTransform, decimalTransform, decimalTransform, decimalTransform]) + "\n";
    outputIPv4.value += ipTransform(inputIPv4.value, [decimalTransform, decimalTransform, decimalTransform]) + "\n";
    outputIPv4.value += ipTransform(inputIPv4.value, [decimalTransform, decimalTransform]) + "\n";
    outputIPv4.value += ipTransform(inputIPv4.value, [decimalTransform]) + "\n";
    outputIPv4.value += ipTransform(inputIPv4.value, [makeHexTransform(0), makeHexTransform(0), makeHexTransform(0), makeHexTransform(0)]) + "\n";
    outputIPv4.value += ipTransform(inputIPv4.value, [makeHexTransform(0), makeHexTransform(1), makeHexTransform(2), makeHexTransform(3)]) + "\n";
    outputIPv4.value += ipTransform(inputIPv4.value, [makeHexTransform(0), makeHexTransform(0), makeHexTransform(0)]) + "\n";
    outputIPv4.value += ipTransform(inputIPv4.value, [makeHexTransform(0), makeHexTransform(0)]) + "\n";
    outputIPv4.value += ipTransform(inputIPv4.value, [makeHexTransform(0)]) + "\n";
    outputIPv4.value += ipTransform(inputIPv4.value, [makeOctalTransform(0), makeOctalTransform(0), makeOctalTransform(0), makeOctalTransform(0)]) + "\n";
    outputIPv4.value += ipTransform(inputIPv4.value, [makeOctalTransform(0), makeOctalTransform(1), makeOctalTransform(2), makeOctalTransform(3)]) + "\n";
    outputIPv4.value += ipTransform(inputIPv4.value, [makeOctalTransform(0), makeOctalTransform(0), makeOctalTransform(0)]) + "\n";
    outputIPv4.value += ipTransform(inputIPv4.value, [makeOctalTransform(0), makeOctalTransform(0)]) + "\n";
    outputIPv4.value += ipTransform(inputIPv4.value, [makeOctalTransform(0)]) + "\n";
    outputIPv4.value += ipTransform(inputIPv4.value, [makeHexTransform(0), makeOctalTransform(0), decimalTransform]) + "\n";
    outputIPv4.value += ipTransform(inputIPv4.value, [makeHexTransform(1), makeOctalTransform(1), decimalTransform]) + "\n";
}

function updateRUN(algo) {
    newVal = reverseUnicodeNormalize(inputRUN.value, runData[algo]);
    out = document.getElementById(`outputRUN${algo}`);
    if (newVal == "") {
        out.value = "";   
        return
    }

    if (newVal.normalize(algo) != inputRUN.value) {
        console.log(`You found a bug in the ${algo} normalization table... (${btoa(inputRUN.value)})`)
        out.value = "";   
        return
    }

    out.value = newVal;
}

window.addEventListener("load", (event) => {
    inputIPv4.value = "127.0.0.1";
    updateIPv4();

    inputRUN.value = "K";
    updateRUN("NFC");
    updateRUN("NFD");
    updateRUN("NFKC");
    updateRUN("NFKD");
});

inputIPv4.addEventListener("keyup", (e) => {
    updateIPv4();
});

inputRUN.addEventListener("keyup", (e) => {
    updateRUN("NFC");
    updateRUN("NFD");
    updateRUN("NFKC");
    updateRUN("NFKD");
});

