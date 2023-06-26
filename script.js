let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let sign = document.getElementById("sign");


let fn = firstNumber.innerText;
let sn = secondNumber.innerText;
let sg = sign.innerText;

firstNumber.innerText = 46;

function myFunction() {
    // console.log(Number(fn) + Number(sn))
    let answer = document.getElementById("answer");
    let aw = answer.value;
    // console.log(Number(aw))
    // console.log(Number(fn) + Number(sn) === Number(aw))
    if (Number(fn) + Number(sn) === Number(aw)) {
        console.log("true")
    }
    else {
        console.log("false")
    }
}