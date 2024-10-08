function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i =0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/dice${value}.gif"/>`)
    }
    console.log(values);
    diceResult.innerHTML = `dice: ${values}`;
    diceImages.innerHTML = `<img src="images/dice1.gif"/>`;
}   