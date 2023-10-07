//q5

//map:-
// const numbers = [4, 5, 2, 3 , 6 , 8 ];
// let M = [];


// M= numbers.map(function(H){

//     return Math.pow(H,2)
// });
// console.log(M);


//foreach:-
// const numbers = [4, 5, 2, 3 , 6 , 8 ];
// let M = [];
// numbers.forEach(Num=> {
//        M.push(Num*Num)
// });
// console.log(M);


//for:-
// const numbers = [4, 5, 2, 3 , 6 , 8 ];
// let M = [];
// for(i=0; i<numbers.length ; i++){
//     M.push( numbers[i]*numbers[i]);
// }
// console.log(M);


//q6

// function classifyNumbers(arr) {
//     return arr.map(function (element) {
//       if (typeof element == 'number') {
//         if(element%2==0){
//             return "Even"
//         } else{
//             return "Odd"  
//         }
//       } 
//       else {
//         return 'N/A';
//       }
//     });
//   }
  
//   const inputArray = [4, 11, "Ali",38 , 27 , "Ahmad"];
//   const resultArray = classifyNumbers(inputArray);
  
//   console.log(resultArray); // ['even', 'odd', 'even', 'N/A' ,'odd' , 'N/A' ]
  


//q7
// function classifyNumbers(arr) {
//     return arr.map(function (element) {
     
//         if(element%5==0 && element%3==0){
//           return "Fizz Buzz"  
//         } else if(element%5==0){
//             return "Buzz"  
//         } else if(element%3==0){
//             return "Fizz"   
//             } else{
//             return element;
//         }
      
      
//     });
//   }
  
//   const inputArray = [3, 20 , 34 , 15 , 27 , 22 , 30];
//   const resultArray = classifyNumbers(inputArray);
  
//   console.log(resultArray); 
