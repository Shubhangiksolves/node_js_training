const fs = require('fs');
 
// synchronous 
fs.writeFileSync('./demo.txt', "This is Demo File");
fs.writeFileSync('./demo.txt', "This is Demo text File");

// asynchronous
fs.writeFile('./async.txt', "This file is created asynchronously", (err) => {});

const demoFile =  fs.readFileSync('demo.txt', 'utf-8');
console.log(demoFile);

// this directly not returns the file content, we need to pass callback to get the content
fs.readFile('./demo.txt', 'utf-8', (error, result) => {
    error ? console.log("error--", error) : console.log("file content--", result);    
})

fs.appendFileSync('./demo.txt', `\n Appended line`);
console.log(demoFile);

 fs.copyFileSync('./demo.txt', './copy-demo.txt');

// delete any file
fs.unlinkSync('./copy-demo.txt');

fs.mkdirSync('new-dir/a', {recursive: true});

