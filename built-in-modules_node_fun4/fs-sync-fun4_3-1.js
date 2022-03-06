// fs or filesystem module

const path = require('path');
const { readFileSync, writeFileSync } = require('fs');

console.log('start')

// get the path for the files and join them
const firsTextPath = path.join('./content/', 'first.txt');
const secondTextPath = path.join('./content/', 'second.txt');


const firstText = readFileSync(firsTextPath, 'utf8');
const secondText = readFileSync(secondTextPath, 'utf8');
writeFileSync('./content/third.txt', `texts from first.txt and second.txt: ${firstText},  ${secondText}`);

console.log('done with first task')
console.log('Start new task')
const thirdText = readFileSync('./content/third.txt', 'utf8');
// read the files synchronously 
const moduleFn = ( ) => {
    

     console.log( thirdText );
}

module.exports = moduleFn