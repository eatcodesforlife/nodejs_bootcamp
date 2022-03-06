const path = require('path');

// path.join 
const filePath = path.join('/content/', 'subfolder', 'test.txt');// expected output: "/content/subfolder/test.txt"

const base = path.basename(filePath);// expected output: "test.txt"

// path.resolve returns the absolute path to the file
// accepts a sequence of paths and returns the absolute path to the file

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');// expected output: "/Users/user/Documents/node-course/built-in-modules_node_fun4/content/subfolder/test.txt"

const moduleFn = (  ) => {
    console.log( absolute );
}

module.exports = moduleFn;