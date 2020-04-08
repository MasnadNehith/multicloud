
/**
 * 
 * @param {String} name 
 * @param {Int} a 
 * @param {Int} b 
 * return @param (Int) / (text)
 */
const calculator = (name, a , b) => {
    switch(name){
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        default:
            return 'Expressions are add, substract, multiply, divide';
    }
}

module.exports = {
    calculator
}