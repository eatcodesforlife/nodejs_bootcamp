const num1 = 5
const num2 = 10


function add(num1, num2) {
    console.log( `result is: ${num1 + num2}`)
}

add(num1, num2)

// if you invoke a function inside a module, the code will run even if it's not assigned to a variable or invoked in another file once imported in a different file
// if you import a module you actually invoke the function

