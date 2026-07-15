// Hoisting with moving function sumFunc after console.log it still works
// but when we move cost sumConst it doesn't. it only happens when u use function keyword
// with const and let u get error and when u use var it shows undefined

// const sumConst = (a, b) => a + b;
// console.log(`sumFunc(1,2) => ${sumFunc(1, 2)}`);
// console.log(`sumConst(2,5) => ${sumConst(2, 5)}`);

// function sumFunc(a, b) {
//   return a + b;
// }

// var a = indefined

// console.log(a);

// a = 2;

/////////////////////////////////
// difference between var, let, const| var => function scope / let, const => block scope
// function scope : available anywhere inside scope/ block scope: available inside of block it is declared in

// if (true) {
//   var varVariable = "This is true";
// }

// var varVariable = "This is false";

// console.log(varVariable);

// if (true) {
//   let letVariable = "This is true";
//   console.log(letVariable);
// }

// console.log(letVariable); //it is not available here and we get reference error

// //Var variables can be reassigned multiple times, but let and const no

// let userText = "this is true";
// let userText = "this is false";

// console.log(userText);//error

// console.log(varVariable);

// var varVariable = "true"; // showing undefined

// console.log(varVariable);

// console.log(varVariable);

// let varVariable = "true"; // error

// console.log(varVariable);

// const constVar = 1;
// let letVar = 1;

// constVar = 2; //Typeerror, we can't change constVar to be a different value
// letVar = 2;

//const only prevents us to changing actual value but for an object you can change a property
//example

// const user = { name: "Bob" };

// user.name = "sally";
// console.log(user);
