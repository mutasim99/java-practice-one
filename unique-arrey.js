// const biryaniKhor = ['Rahim', 'karim', 'Abdul', 'Kaium', 'Rahim', 'Raihan', 'Abdul'];

// function uniqueArrey(arrey){
//     const unique = [];
//     for(const item of arrey){
//         if (unique.includes(item) === false) {
//             unique.push(item);
//         }
//     }
//     return unique;
// }

// const list = uniqueArrey(biryaniKhor);
// console.log(list);


const registration = [12, 34, 45, 56, 56, 12, 34, 43, 34];

function uniqueNumber(numbers){
    const unique = [];
    for(number of numbers){
        if (unique.includes(number) === false) {
            unique.push(number);
        }
    }
    return unique;
}

const result = uniqueNumber(registration);
console.log(result);