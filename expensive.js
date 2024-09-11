const mobiles = [
    { name: 'Xiomi', price: 15000},
    { name: 'Vivo', price: 18000},
    { name: 'Walton', price: 16000},
    { name: 'iPhone', price: 160000},
    { name: 'Realme', price: 10000},
    { name: 'Pixel', price: 25000},
]


function expensivePhone(phones){
    let expensive = mobiles[0];
    for(phone of phones){
        if (phone.price > expensive.price) {
            expensive = phone;
        }
    }
    return expensive;
}

const result = expensivePhone(mobiles);
console.log(result);