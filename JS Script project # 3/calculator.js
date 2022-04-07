function calculator(){
    console.log("Calculating...");
    let num1 = Number(prompt("Enter the number"));
    let num2 = Number(prompt("Enther the second number"));
    document.getElementById(`calculationZone`).innerHTML=`<div class="number-row"><p>First Number: ${num1}</p><p>Second Number: ${num2}</p></div><div class=row-container><p>Addition: ${num1+num2}</p><p>Subtraction: ${num1-num2}</p><p>Multiplication: ${num1*num2}</p><p>Division: ${num1/num2}</p></div>`;
}