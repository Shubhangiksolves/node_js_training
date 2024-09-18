const funcFromFile3 = require('./file3');

console.log('File 2 executed');

module.exports = function () {
    console.log('Function from File 2 called');
    funcFromFile3();
}
