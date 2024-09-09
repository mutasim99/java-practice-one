// var orangePrice = 300;
// orangePrice -= 20;
// var applePrice = 150;
// applePrice += 35;
// var totalPrice = orangePrice + applePrice
// console.log(totalPrice);

// ----->> Break section ------>>

// for(let i = 0; i <= 200; i++){
//     console.log(i);
//     if (i >= 5) {
//         break
//     }
// }



// let num = 1;
// let sum = 0;
// while (true) {
//     sum = sum + num
//     if (sum >= 100) {
//         break
//     }
//     num++
// }
// console.log('Total sum is', sum);
// console.log('Last number added', num);

// for(let i = 150; i <= 200 ; i++){
//     if (Math.sqrt(i) % 1 === 0) {
//         console.log('the number is', i);
//         break
//     }
// }

// --------->> Continue section ---------->>

// for(let i = 0; i <=40; i++){
//     if (i % 2 == 1) {
//         continue
//     }
//     console.log('The even number is:' , i);
// }

// for(let i = 53; i <= 85; i++){
//     if (i % 5 === 0) {
//         continue
//     }
//     if (i % 2 == 1) {
//         console.log(i);
//     }
// }



// ---------->> For loop ----------->>


//  num = 9;
// for(let i = 1; i <= 10; i++){
//     console.log(`${num} x ${i} = ${num * i}`);
// }



// ----------->> slice ------------>>

let fruits = ['Apple' , 'Orange', 'Banana' , "Mango" , 'Malta'];
let pickFruites = fruits.slice(2,3);
console.log(pickFruites);