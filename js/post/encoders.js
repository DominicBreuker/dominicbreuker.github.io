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

window.addEventListener("load", (event) => {
    inputIPv4.value = "127.0.0.1";
    updateIPv4();
});

inputIPv4.addEventListener("keyup", (e) => {
    updateIPv4();
});

