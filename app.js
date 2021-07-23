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