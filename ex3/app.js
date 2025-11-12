//loop
//for loop

/*
    syntax

        for(initailize; condtion; step(decrement,increment)){
            //block statements
        }
*/

// let i;

// for (i = 1; i <= 5; i++) {
//   console.log("Hello", i);
// }

//while loop

/*
    syntax

    initailize;

       while(condition){
            
       //block statements

       step(decrement,increment
       }


            */

// let i = 5;

// while (i >= 1) {

//   console.log(i);

//   i--;

// }

//do while loop
/*
    syntax

    initailize;

       do{
            
       //block statements

       step(decrement,increment

       }while(condition);

*/

let i = 1;

// do {
//   console.log(i);

//   i++;
//   //1+1=2
// } while (i <= 5);

//2 <= 5

//array

// let arr1 = [1, 2, 3, 4, 5];
//          0 ,1 ,2 ,3, 4

//assign by index
// items:     [1, 2, 3, 4, 5]
// index: arr1[0],arr1[1],arr1[2],...
// console.log(arr1[0]);
// console.log(arr1[1]);
// console.log(arr1[2]);
// console.log(arr1[3]);
// console.log(arr1[4]);

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1[i]);
// }

// array method
//for of

// const arr1 = [1, 2, 3, 4, "ABC", 6, 7, 8];

// for (let item of arr1) {
//   console.log(item);
// }

// const arr1 = [1, 2, 3, 4, "ABC", 6, 7, 8];

//for in
// for (let ind in arr1) {
//   console.log(arr1[ind]);
// }

// forEach loop

/*
syntax
arrName.forEach( callBackFucntion(param) {
    
//block stamtements

})

*/

// const arr1 = [1, 2, 3, 4, "ABC", 6, 7, 8];

// arr1.forEach(function (el) {
//   console.log(el);
// });

//map method
const mapArr = [1, 2, 3];
mapArr.map(function (e) {
  console.log(e);
});

// return new array
const newArr = mapArr.map(function (e) {
  return e * e;
});
console.log(newArr);
