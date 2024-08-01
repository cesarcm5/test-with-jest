test("One euro should be 1.07 dollars", function() {
   
    const { fromEuroToDollar } = require('./app.js');

  
    const dollars = fromEuroToDollar(3.5);

 
    const expected = 3.5 * 1.07; 
    
   
     expect(fromEuroToDollar(3.5)).toBe(expected); 
})

test("transform dollar to yen", function (){
    const { fromDollarToYen } = require('./app.js');

 
    const Yen = fromDollarToYen(20);


    const expected = 20 * 156.5 * 1.07; 
    
   
     expect(fromDollarToYen(20)).toBe(expected); 
})
const { fromYenToPound } = require('./app.js');

    const Pound = fromYenToPound(25);

   
    const expected = 25 * 0.87* 156.5; 
    
    
     expect(fromYenToPound(25)).toBe(expected); // 1 euro 

const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});