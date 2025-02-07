const arr = [1,'2', 3, 100];

const arrNumbers = [];
arr.forEach((el) => {
    if (typeof el === 'number') {
        arrNumbers.push(el);
        console.log(i);
    }
});

console.log(arrNumbers);

const arrNumbers2 = arr.map((el) => {
    if (typeof el === 'number') {
        return el;
    }
    return null;
});

console.log(arrNumbers2);
