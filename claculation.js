function totalPrice(shirtquantity, pantQuantity, shoeQuantity){
    const shirtPrice = 500;
    const pantPrice = 500;
    const shoePrice = 900;



    const totalShirtPrice = shirtquantity * shirtPrice;
    const totalPantPrice = pantQuantity * pantPrice;
    const totalShoePrice = shoeQuantity * shoePrice;

    const result = totalShirtPrice + totalPantPrice + totalShoePrice;
    return result;
}

const cost = totalPrice(8, 3, 4);
console.log('Toatl cost is:' , cost , 'tk.');