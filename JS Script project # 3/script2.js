
function sum(num1,num2){
    return num1 + num2;
}


let result=sum(10,10);
console.log(result);

//NaN = not a number ----> using string :()


//declaring the variable as let only allows for display after the function, unlike above function
//    let sum2 = function(){
//          console.log(3+3);
//    }
//    sum2()

//global scope-meaning subtotal exist outside of addcart funcion
let subtotal =0;

function addCart(price){
    return subtotal +=price;
}

function taxesCalculation(subtotal){
    return 1.11*subtotal;
}


subtotal = addCart(200);  //200
subtotal = addCart(400);  //600
subtotal = addCart(600);  //1200

console.log(`subtotal: ${subtotal}`); //1200

const total = taxesCalculation(subtotal)
console.log(`The total is: ${total}`)