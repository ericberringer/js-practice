console.log("sup")

// Udemy JS Course Notes

// Switch Statements

let day = 8

switch(day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log('Not a day dummy.')
}

let emoji = 'sad face'

switch(emoji) {
    case 'sad face':
    case 'happy face':
        console.log('yellow')
        break
    case 'eggplant':
        console.log('purple')
        break
    case 'lips':
    case 'heart':
        console.log('red')
        break
}

// Ternary

let status = 'online'

let color = status === 'offline' ? 'red' : 'green'
console.log(color)

// Arrays

// concat - "merge arrays"
// includes - "look for a value"
// indexOf - "just like str.indexOf"
// join - "creates a string from arr" 
// reverse - "reverses an array"
// slice - "copy portion of an array"
// splice - "remove/replace elements" 
// sort - "sorts an array - default sort will order alphabetically"

let ingredients = [
    'water',
    'flour',
    'shrimp'
]

ingredients.includes('water')
true
ingredients.includes('shrimp', 1)
// second parameter is fromIndex, does ingredients include shrimp
// after index of one.
true
ingredients.includes('sugar')
false

ingredients.indexOf('flour')
1

const animalPairs = [
    ['doe', 'buck'],
    ['ewe', 'ram']
]

animalPairs[0][1] - 'buck'
// first index is nested array index, next is index within the nested array.

// Objects

const object = {
    item1: 20,
    item2: 30,
    item3: 50,
    35: "thirty five",
    "45 number": 'forty five'
}
// property of 35 is converted to a string
// "45 number" property has a number and a space so must be in quotes
// and must be accessed via bracket notation.

let myItem = 'item1'
console.log("myItem", object[myItem])
// here we are accessing a variable that is set to an object in our property
// so we use bracket notation with the object plus the variable name storing our property.

console.log("object", object)
console.log("item3", object.item3)
console.log(object["45 number"])

object.item4 = 75
// adds the key/value pair to the object
object.item4++
// increments by 1
object.item3 += 5
// adds 5 to current value which is 50, output is 55

// Array of Objects

const student = {
    firstName: "David",
    lastName: "Jones",
    strengths: [ "Music", "Art" ],
    exams: {
        midterm: 92,
        final: 97
    }
}

const midtermScore = student.exams.midterm
const finalScore = student.exams.final
const average = (midtermScore + finalScore) / 2

console.log("AverageScore", average)

// Array of Objects

const animalApts = [
    apt1 = {
        dog: "Fido",
        cat: "Sven"
    },
    apt2 = {
        snake: "Bob",
        fish: "Stacey"
    },
    apt3 = {
        bird: "Paul",
        dog: "Lady"
    }
]

console.log("animalApts", animalApts)
console.log("apt2", animalApts[2])

// For Loops
// Syntax
// for ([initialExpression]; [condition]; [incrementExpression])

for(let i = 1; i <= 20; i+=3) {
    console.log("Hello", i)
}
// Starting value is 1, increment until i is less than or equal to 52, increment by 3
// i++, i--,

// Loop thru and square each number
for (let num = 1; num <= 10; num++) {
    console.log(`${num}x${num} = ${num * num}`)
}

for(let down = 50; down >= 0; down -= 10) {
    console.log("subtractByTen", down)
}
console.log("THIS LOOP IS DONE!!")

const myStudents = [
    {
        firstName: "Hercules",
        grade: 99
    },
    {
        firstName: "Hermes",
        grade: 92
    }
]

// for (let i = 0; i < myStudents.length; i++) {
//     let student = myStudents[i]
//     console.log(`${student.firstName} scored a ${student.grade}.`)
// }

let totalScore = 0
for (let i = 0; i < myStudents.length; i++) {
    let student = myStudents[i]
    totalScore += student.grade
}
console.log(totalScore / myStudents.length)

const word = 'stressed'
let reversedWord = ""
for (let i = word.length -1; i >= 0; i-- ) {
    reversedWord += word[i]
}
console.log(reversedWord)

// Nested For Loop

// for (let i = 1; i <= 5; i++) {
//     console.log('Outer Loop', i)
//     for (let j = 6; j >= 0; j-=2) {
//         console.log('   Inner Loop', j)
//     }
// }

const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
]

let arraySums = 0
for (let i = 0; i < gameBoard.length; i++) {
    let row = gameBoard[i]
    // console.log(row)
    for(j = 0; j < row.length; j++){
        // console.log(row[j])
        arraySums += row[j]
    }
    console.log(arraySums)
}

// While Loop

const target = Math.floor(Math.random() * 10)
let guess = Math.floor(Math.random() * 10)
console.log("target", target)
console.log("guess", guess)

// Start with some condition, i.e. guess is not equal to target
while (guess !== target) {
    // inside the loop, update or attempt to make the condition false
    console.log(`Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10)
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log("Target and Guess now match.")

// For...Of and For

// for (variable of iterable) {
//     statement
// }

let subreddits = [ "soccer", "popheads", "cringe", "books" ]

for (let sub of subreddits) {
    console.log("sub", sub)
}

for (let char of "cockadoodledoo") {
    console.log(char.toUpperCase())
}

const magicSquare = [ 
    [2,7,6],
    [9,5,1],
    [4,3,8]
]

// loop through array and grab each individual array
for (let row of magicSquare) {
    // set a sum variable to store the math
    let sum = 0
    // loop through the nested arrays and add the numbers together and store in sum variable
    // sum variable will be set back to zero after each loop
    for(let num of row) {
        sum += num
    }
    console.log(`${row} summed to ${sum}`)
}

const words1 = [ "mail", "milk", "bath", "black" ]
const words2 = [ "box", "shake", "tub", "berry" ]

for (let i = 0; i < words1.length; i++){
    console.log(`${words1[i]}${words2[i]}`)
}

// For...Of with Objects

const movieReviews = {
    Arrival: 9.5,
    Alien: 9,
    Amelie: 8,
    "In Bruges": 9,
    Amadeus: 10,
    "Kill Bill": 8,
    "Little Miss Sunshine": 8.5,
    Coraline: 7.5
}

console.log("key", Object.keys(movieReviews))
console.log("value", Object.values(movieReviews))

for(let movie of Object.keys(movieReviews)){
    console.log(movie, movieReviews[movie])
}

const ratings = Object.values(movieReviews)
let avg = 0
for(let r of ratings) {
    avg += r
}
avg /= ratings.length
console.log(parseFloat(avg.toFixed(2)))

let totalReviews = Object.keys(movieReviews).length
let summedReviews = Object.values(movieReviews).reduce((accumulator, currentValue) => accumulator + currentValue)
let avgReviews = summedReviews / totalReviews 
console.log("avgReviews", parseFloat(avgReviews.toFixed(2)))

// For...In
// Use with Objects

// for (variable in object) {
//     statement
// }

const jeopardyWinnings = {
    regularPlay: 2522700,
    watsonChallenge: 300000,
    tournamentOfChampions: 500000,
    battleOfTheDecades: 100000,
    streetJeopardy: 3000000
}
// loop through and print each key/property in jeopardyWinnings
let totalWinnings = 0
let numOfProps = Object.keys(jeopardyWinnings).length
console.log("numOfProps", numOfProps)
for(let prop in jeopardyWinnings) {
    console.log(prop)
    console.log(jeopardyWinnings[prop])
    totalWinnings += jeopardyWinnings[prop]
    let avgWinnings = totalWinnings / numOfProps
    console.log("avgWinnings", avgWinnings)
}
console.log(`Ken Jennings Total Earnings: ${totalWinnings}`)

// Functions

const grumpus = () => {
    console.log("Grumpus Function Call")
}
grumpus()


const rollDie = () => {
    let roll = Math.floor(Math.random() * 6) + 1
    console.log(`Rolled: ${roll}`)
}

// const throwDice = () => {
//     rollDie()
//     rollDie()
//     rollDie()
//     rollDie()
//     rollDie()
//     rollDie()
// }
// throwDice()

// Arguments

const greet = (nickname) => {
    console.log(`Hi ${nickname}`)
}
greet("Tim")

const throwDice = (numRolls) => {
    for(let i = 0; i < numRolls; i++){
        rollDie()
    }
}
throwDice(3)

// Multiple Arguments

const square = (num) => {
    console.log("square", num * num)
}
square(3)

const sum = (x, y) => {
    console.log("sum", x + y)
}
sum(10, 200)

const divide = (a, b) => {
    return a / b
}
console.log(divide(100, 13))

// Return Statement

const colorArray = [ "blue", "red", "orange", "magenta" ]

const containsPurple = (arr) => {
    for(let color of arr){
        if(color === "purple" || color === "magenta") {
            return true
        }
    }
    return false
}

// Function Practice

containsPurple(colorArray)
// call isValidPassword("pass", "doughboy8") in the console
// Alternate way is to assign each condition to a variable i.e. const tooShort = password.length < 8 etc...
const isValidPassword = (username, password) => {
    if (
        password.length < 8 ||
        password.indexOf(username) !== -1 ||
        password.indexOf(' ') !== -1
        ){
        return false
    }
    return "nice password"
}

// indexOf() returns a -1 if the index is not present

const avgValue = (arr) => {
    let total = 0
    for(let num of arr) {
        total += num
    }
    let arrayLength = arr.length
    let average = total / arrayLength
    return console.log(average)
}

const array = [ 75, 76, 80, 95, 100 ]
avgValue(array)

const isPangram = (sentence) => {
    let lowerCased = sentence.toLowerCase()
    for (let char of "abcdefghijklmnopqrstuvwxyz") {
        if(!lowerCased.includes(char)) {
            return console.log(false)
        }
    }
    return console.log(true)
}

isPangram("the five boxing wizards jump quickly")

// Create a function that creates an object with a random value and random suit
// This function allows you to pick a random index in an array.
const pick = (arr) => {
    const idx = Math.floor(Math.random() * arr.length)
    return arr[idx]
}

const getCard = () => {
    const values = [ "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A" ]  
    const suits = [ "clubs", "spades", "hearts", "diamonds" ]
    // return statement is creating an object and setting a random index of the two arrays.
    return console.log({ value: pick(values), suit: pick(suits) })
}
getCard()

// Lexical Scope - Can access a variable in a nested funciton if the variable is defined in the parent function.
// Function Expression writing a function within a variable.
const sumFunc = function (x,y) {
    return x + y
}

const addFunc = (x, y) => {
    return x + y
}

const subtractFunc = (x,y) => {
    return x - y
}

const multiplyFunc = (x,y) => {
    return x * y
}

const divideFunc = (x,y) => {
    return x / y
}

const operations = [ addFunc, subtractFunc, multiplyFunc, divideFunc ]

for (let func of operations) {
    let result = func(30, 5)
    console.log(result)
}

// Set the value of a property on an object to a func.
// Access the value with dot notation and pass in the args you would pass into the function itself
const thing = {
    doSomething: multiplyFunc
}

console.log(thing.doSomething(500,2))

// Functions as Arguments

// This function takes a function as an argument
// and calls that passed function three times.
const callThreeTimes = (someFunc) => {
    someFunc()
    someFunc()
    someFunc()
}

const rage = () => {
    console.log("Die Die Die")
}

const cry = () => {
    console.log("Waaaaaaaah")
}

callThreeTimes(rage)

// Function take two args, action will be a function,
// and num will be the number of times the passed function is run via a for loop.
const repeatNTimes = (action, num) => {
    for(let i = 0; i < num; i++) {
        action()
    }
}

repeatNTimes(rage, 8)


// Function takes two args, will pass in two functions rage and cry
// rand variable is generating a random number between .00 - 1
const pickOne = (f1, f2) => {
    let rand = Math.random()
    // Math.random will generate a random number between .00 and 1
    console.log(rand)
    // conditional, if rand is less than 0.5 print the first function passed as an arg, if not, pass the second function
    if (rand < 0.5) {
        f1()
    } else {
        f2()
    }
}

pickOne(rage, cry)

// multiplyBy takes a number as an arg, it returns a function
const multiplyBy = (num) => {
    return function (x) {
        return x * num
    }
}
// Store the previous function in a variable
// That variable is a new function and will return the x * num function
// the number passed in multiplyBy acts as the multiplier
// Since the variable is a function we can pass in a number for x, and this will be mulitplied by the number passed into our multiplyBy function.
const triple = multiplyBy(3)
const double = multiplyBy(2)
const halve = multiplyBy(.5)

// type into the console
triple(3)
// 9
double(6)
// 12
halve(100)
// 50

const makeBetweenFunc = (x, y) => {
    return function (num){
        return num >= x && num <= y
    }
}

const check = makeBetweenFunc(0, 20)
const bornBetween = makeBetweenFunc(1990, 2020)
// type check() with an arg in the console
check()
bornBetween()

// Callback Function - a function passed into another function
// as an argument, which is then invoked inside the outer function.
// setTimeout is a built in function, takes a function and milliseconds.

// setTimeout(function () {
//     alert("Bro")
// }, 2000)

const heyThere = () => {
    alert("You Clicked Me.")
}
// # targets by id, . targets by class just like css.
const btn = document.querySelector('#supButton')
btn.addEventListener('click', () => {
    alert("You are a good clicker.")
})

// forEach()
// executes a provided function once for each array element.

const numbers = [ 20, 21, 22, 23 ,24 ,25, 26, 27 ]

// forEach can take an anonymous function that takes the element in an array plus the index as params, but don't need to pass the index.
numbers.forEach((element, idx) => {
    console.log(idx, element)
})

let total = 0
numbers.forEach(element => {
    total += element
})
console.log(total)
console.log("average", total / numbers.length)

const printDouble = (n) => {
    console.log(n * 2)
}
const printTriple = (n) => {
    console.log(n * 3)
}

numbers.forEach(printDouble)
numbers.forEach(printTriple)

const books = [
    {
        title: "A Gentleman in Moscow",
        rating: 5
    },
    {
        title: "The Giver",
        rating: 9
    },
    {
        title: "Boot Man",
        rating: 1.5
    },
]

// The following two blocks of code give the same output.
books.forEach(object => {
    console.log(object.title.toUpperCase())
})

for(let book of books) {
    console.log(book.title.toUpperCase())
}

// Array Methods

// Implicit Return is when returning one expression, doesn't need curly braces
// Map

const integers = [ 20, 21, 22, 23 ,24 ,25, 26, 27 ]
const words = [ 'asap', 'byob', 'rsvp', 'diy' ]

const doubles = integers.map(dub => dub * 2)

console.log(doubles)

// map through array of numbers return an object
// include a value property which will be a number in the array
// add a property of isEven, checks if the number is even (true) or odd (false)
// use modulo (remainder) and divide by 2 and check if it is equal to 0 to determine even or odd
const evens = integers.map(num => {
    return {
        value: num,
        isEven: num % 2 === 0
    }
})

console.log(evens)

const abbrevs = words.map(letter => letter.toUpperCase().split('').join('.'))
console.log(abbrevs)

const someBooks = [
    {
        title: "A Gentleman in Moscow",
        rating: 5
    },
    {
        title: "The Giver",
        rating: 9
    },
    {
        title: "Boot Man",
        rating: 1.5
    },
]

const titlesOnly = someBooks.map(title => title.title)
console.log(titlesOnly)

// Array.find
// finds us the first match

let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
]

// returns first movie that satisfies condition
const mrMovies = movies.find(movie => movie.includes("Mr"))
console.log(mrMovies)

const mrsAtFront = movies.find(movie => movie.indexOf("Mrs") === 0)
console.log(mrsAtFront)

// Filter


