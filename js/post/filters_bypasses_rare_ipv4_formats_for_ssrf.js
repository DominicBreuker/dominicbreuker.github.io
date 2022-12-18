function update1() {
    output11.value = ipTransform(input1.value, [makeHexTransform(0), makeHexTransform(0), makeHexTransform(0), makeHexTransform(0)]);
    output12.value = ipTransform(input1.value, [makeOctalTransform(0), makeOctalTransform(0), makeOctalTransform(0), makeOctalTransform(0)]);
}

function update2() {
    output21.value = ipTransform(input2.value, [decimalTransform, decimalTransform, decimalTransform]);
    output22.value = ipTransform(input2.value, [decimalTransform, decimalTransform]);
    output23.value = ipTransform(input2.value, [decimalTransform]);
}

window.addEventListener("load", (event) => {
    input1.value = "127.0.0.1";
    update1();

    input2.value = "127.0.0.1";
    update2();
});

input1.addEventListener("keyup", (e) => {
    update1();
});

input2.addEventListener("keyup", (e) => {
    update2();
});
