const fs = require('fs');

// Blocking(Synchronous)

console.log("before reading file content");

const fileContent =  fs.readFileSync('demo.txt', 'utf-8');
console.log("File content:", fileContent);

console.log("after reading file content");

// non-blocking(Asynchronous)
console.log("before reading file content");

fs.readFile('demo.txt', 'utf-8', (error, result) => {
    error ? console.log(error) : console.log("File Content:" ,result);    
});

console.log("after reading file content");