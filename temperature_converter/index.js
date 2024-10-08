// temp * 9 / 5 + 32 to F
// (temp -32)*(5/9)

const farhrenheit = document.getElementById("tofarhrenheit");
const celsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
const input = document.getElementById("textBox");
let temp = Number(input.value);


function convert(){
    if(farhrenheit.checked){
        temp = temp * 9 / 5 + 32;
        result.textContent = `${temp.toFixed(1)}F`;
    }
    if(celsius.checked){
        temp = (temp - 32) * (5/9);
        result.textContent = `${Math.floor(temp)}C`;
    }
}