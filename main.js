let ages = [3, 9, 23, 64, 2, 8, 28, 93]

function subtractAges(array){
    return (array[array.length-1] - array[0])
}

ages.push(110);

console.log(subtractAges(ages))