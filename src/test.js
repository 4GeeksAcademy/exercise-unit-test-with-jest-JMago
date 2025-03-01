

test('adds 14 + 9 to equal 23', () =>{

    const {sum} = require('./app.js');

    let total = sum(14,9);

    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars",  () => {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("One yen should be 0.87/156.5 pounds",  () => {

    const { fromYenToPound } = require('./app.js');
    const expected = 3.5 * 0.00555910543130990415335463258786;
    expect(fromYenToPound(3.5)).toBe(0.01945686900958466453674121405751) });


test("One dollar should be 156.5/1.07 yen " , () => {

    const  { fromDollarToYen } = require('./app.js');
    const expected = 2 * 146.26168224299065420560747663551;
    expect(fromDollarToYen(2)).toBe(292.52336448598130841121495327103) });