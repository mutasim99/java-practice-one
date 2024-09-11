function averageEven(numbers){
    const even = [];
    for(number of numbers){
        if (number % 2 === 0) {
            even.push(number)
        }
    }
    let sum = 0;
    for(number of even){
        sum = sum + number;
    }
    const length = even.length;
    const average = sum / length;
    console.log('The sum is:' , sum);
    return average;
}

const numbers = [23, 45, 34, 23, 76, 45, 11, 14,];
const average = averageEven(numbers);
console.log('The average is:' , average.toFixed(2));




