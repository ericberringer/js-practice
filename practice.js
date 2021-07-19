//  Function Expression, definition, declaration
// const calculateAgeInDogYears = (age) => {
//     const ageInDogYears = age / 7
    
//     return ageInDogYears
// }

// Funciton Call, invocation, execution
// const dogAge = calculateAgeInDogYears(50)
// console.log(dogAge)

// #################

// const dogAge = calculateAgeInDogYears(22)
// console.log(dogAge)

// const dogBreed = (dog) => {
//     if(dog === 'meow') {
//     return "I like cats."
//     } else {
//     return `My favorite dog breed is ${dog}.`
//     }
// }
// const favDog = dogBreed('collies') 
// console.log(favDog)

// #################


// const add = (num1, num2, num3) => {
//     return num3 + num2 + num1
// }
// const sumNum = add(3,5,9)
// console.log(sumNum)

// #################

const go = (direction, speed) => {
    if(speed > 75) {
        return `SLOW DOWN!!`
    } else {
    return `The car is ${direction}, he was only ${speed} years old.`
    }
}
const goSpecs = go('dead', 18)
console.log(goSpecs)

// ##################

// const evenOrOdd = (number) => {
//     if(number % 2 === 0){
//         return "Even"
//     } else {
//         return "Odd" 
//     }
// }
// const checkNumber = evenOrOdd(24)
// console.log(checkNumber)


const evenOrOdd = (number) => {
    return (number % 2 === 0 ? `${number} is an even number.` : `${number} is an odd number.`)
}
console.log(evenOrOdd(24))
//   ? is saying 'is' % 2 === 0 even OR is it Odd.
//  item right afte the question mark is asking if its true. item on other 
// side of the colon is when it is false. Basically an if...else.


// ################

// const words = [
//     "The", "killing", "complex", "houses",
//     "married", "kittens", "and", "single",
//     "soldiers", "and", "their", "kleptomaniacal",
//     "families"
// ]

/*
    Function to filter out `k` words
    (Google 'javascript startswith' to get started)
 */
// const kFilter = () => {
    
//     return words.startsWith('k')
//     }

/*
    Function to build a single string from the array
    (Google 'javascript combine all items in array' to get started)
 */
// const stringBuilder = () => {
//     return words.join()
//     }


/*
    Invoke the filtering function and store its return value
 */
// const noKArray = kFilter()

/*
    Invoke the string building function, and pass the
    return value of the previous function as an argument
*/


// console.log()