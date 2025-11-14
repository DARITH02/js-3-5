/*
    sytax
        function funcName(parameters,...[a,b,c]){
            // blcok code execute
        }

        type of function

            - build in function
                - find()
                - filter()
                    .....

            - user definde function
                type user definde function
                    - return function
                    - non-return function


                + non-return function
                    function funcName(params ...){

                        //no return data to function
                        not use keyword return
                    }
                
                + return function
                    function funcName(params ...){
                        // return data to function name

                        use keyword return
                    
                    }

*/
// non return function
// function print() {
//   let name = "Dara";
//   console.log("Hello " + name);
// }
// print();

// function welcome(word, name) {
//   //parameters
//   console.log("Welcome " + name + " to - " + word);
// }
// welcome("ETEC", "DARA"); //agurments

// return function

// function sum(a, b) {
//   let total = a + b;
//   return total;
// }

// console.log(sum(30, 10));
// let sum1 = ;
// console.log(sum(50, 60));

// function sum1() {
//   console.log(30);
// }

// console.log(sum1() + 20);

//higher order function
// function greet(name, callBack) {
//   console.log("hello " + name);
//   callBack(name);
// }

// //callback function
// function sayGoodBye(name) {
//   console.log("Good bye " + name);
// }

// greet("Sok Chenda", sayGoodBye);

// const arr = [10, 20, 30];

// callback function
// function func1(e, i) {
//   console.log(e, "   ", i);
// }

// arr.forEach(func1);

//  arr.forEach(function(e,i){

// })

// ES6

// // arrow function

// /*
//     keyword variable/functionName = (a,b,c,...) =>{

//     .......
//     // return or not

//     }
// */
// function sum() {
//   return 10 + 20;
// }

// const sum1 = () => 20 + 20;

// let print = () => {
//   console.log("hello arrow function");
// };
// print();

// console.log(sum());
// console.log(sum1());

// const arr = [10, 20, 30];

// let newArr = arr.find((e) => e == 20);
// console.log(newArr);
// const x = 10;
// let y = 20;
// try {
//   x = 20;
//   console.log("Success");
// } catch {
//   console.log("Error");
// } finally {
// //   console.log("finally");
// }
