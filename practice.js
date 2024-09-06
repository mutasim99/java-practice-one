// var orangePrice = 300;
// orangePrice -= 20;
// var applePrice = 150;
// applePrice += 35;
// var totalPrice = orangePrice + applePrice
// console.log(totalPrice);


// for(let i = 0; i <= 200; i++){
//     console.log(i);
//     if (i >= 5) {
//         break
//     }
// }



let num = 1;
let sum = 0;
while (true) {
    sum = sum + num
    if (sum >= 100) {
        break
    }
    num++
}
console.log('Total sum is', sum);
console.log('Last number added', num);