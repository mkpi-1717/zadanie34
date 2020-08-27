let a = "Uwielbiam JavaScript"
let b = "Jestem świetnym programistą"

function c(a, b){
    if(a.length > b.length){
        wynik = a;
    } else {
        wynik = b;
    }
return wynik;
}

console.log(c(a, b));