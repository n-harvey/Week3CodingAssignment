let ages = [3, 9, 23, 64, 2, 8, 28, 93]

function subtractAges(array){
    return (array[array.length-1] - array[0])
}

ages.push(110);

console.log(subtractAges(ages))

function average(array){
    let avg = 0
    for (let i = 0; i < array.length; i++) {
        avg += array[i];
    }
    avg = (avg/array.length)
    return avg;
}

console.log(average(ages))

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

function nameLength(array){
    let nLength = 0
    for (let i = 0; i < array.length; i++) {
        nLength += array[i].length
    }
    nLength = (nLength/array.length)
    return nLength
}

console.log(nameLength(names))

function concatNames(array){
    let newList = ''
    for (let i = 0; i < array.length; i++) {
        newList += (array[i]+' ')
    }
    return newList
}

console.log(concatNames(names));

function lengthOfNames(array){
    let nameLengths = []
    for (let i = 0; i < array.length; i++) {
        nameLengths[i] = array[i].length;
    }
    return nameLengths
}

console.log(lengthOfNames(names))

function totalSum(array){
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i]
    }
    return total
}

console.log(totalSum(lengthOfNames(names)))

function itTakesTwo(word, repeat){
    let repeater = ''
    for (let i = 0; i < repeat; i++) {
        repeater += word
    }
    return repeater
}

console.log(itTakesTwo('Hello', 3));

function fullName(firstName, lastName){
    return (firstName + ' ' + lastName)
}

console.log(fullName('Nathan','Harvey'))

function sumArray(array){
    let x = 0
    for (let i = 0; i < array.length; i++) {
        x += array[i];
    }

    return (x > 100)
}

console.log(sumArray([1,2,3,4,5,6,7,8,9,10]))

console.log(average([1,2,3,4,5,6,7,8,9,10]))

function compareAvg(array1, array2){
    return (average(array1) > average(array2))
}

console.log(compareAvg([1,2,3,4,5,6,7,8,9,10], [1,3,5,7,9,11,13,15,17,19]))

function willBuyDrink(isHotOutside, moneyInPocket){
    return(isHotOutside && moneyInPocket > 10.50)
}

console.log(willBuyDrink(true, 11))

console.log(guessingGame())

function guessingGame(userInput){
    guess = Math.round(Math.random()*10,2)
    console.log(guess)
    while(userInput != guess){
    userInput = prompt('Guess my number 1-10')
    }
    return (alert('You guessed the number'))
}