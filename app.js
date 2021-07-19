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

while (j >= 5) {
    console.log(j);
    j++;
}