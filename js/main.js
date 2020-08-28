let a = "Uwielbiam JavaScript"
let b = "Jestem świetnym programistą"

function myFunc(num1, num2){
    let wynik;
    if(num1.length > num2.length){
        wynik = num1;
    } else {
        wynik = num2;
    }
return wynik;
}

console.log(myFunc(a, b));