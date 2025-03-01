const sum = (a,b) =>{

    return a+b
}

console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
};

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.00555910543130990415335463258786;
    return valueInPound;
};

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 146.26168224299065420560747663551;
    return valueInYen;
};


module.exports={ sum ,fromEuroToDollar, fromDollarToYen, fromYenToPound }