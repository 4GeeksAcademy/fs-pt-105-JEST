const sum = (a,b) => {
    return a + b;
};
console.log(sum(7,3))

const oneEuroIs = {
    "JPY":156.5,  //yen
    "USD":1.07,   //dollar
    "GBP":0.87    //pounds
}
const fromDollarToYen = (value) => {
    let eurosValue = value / oneEuroIs.USD;
    let yenValue = eurosValue * oneEuroIs.JPY;
    return parseFloat(yenValue.toFixed(2));
}

const fromYenToPound = (value) => {
    let eurosValue = value / oneEuroIs.JPY;
    let poundsValue = eurosValue * oneEuroIs.GBP;
    return parseFloat(poundsValue.toFixed(2));
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
module.exports = {sum, fromEuroToDollar,fromDollarToYen,fromYenToPound};