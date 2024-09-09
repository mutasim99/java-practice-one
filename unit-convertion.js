function inchToFeet(inch){
    const feetFraction = inch / 12;
    const feetCount = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetCount + ' feet ' + inchRemaining + ' inch';
    return result;
}

const height = inchToFeet(79);
console.log("The height is:" , height);