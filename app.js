const add = (num1,num2) => {
    return num1 + num2
}

let myArray = ["Dan", "Rhys", "Rob"];

const multiply = (num1, num2) => {
    return num1 * num2
}

const mySeries = {
    elite: true,
    criminal: false,
    mindhunter: true,
    bigmouth: false
};

const food = (country, meal) => {
    return {
        cuisine : country,
        dish : meal
    } 
};

let myList = ["Gon", "Killua", "Hisoka", "Kurapika", "Leorio", "Ging"]
let arrayOfSix = []

const sixLetters = () => {
    for (i=0; i <myList.length; i++) {
        if (myList[i].length >= 6) {
            // console.log(myList[i])
            arrayOfSix.push(myList[i]);
            // console.log(arrayOfSix[i])
        }
    }
}

sixLetters()
// console.log(arrayOfSix)

let number = 26;
let word = number.toString();

const planet = (number) => {
    let solarSystem = ["Sun", "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
    return solarSystem[number]
}

// console.log(planet(3))

const students = (atendance) => {
    let present = 0;
    for (const i in atendance) {
        if (atendance[i]) {
            present++;
        }
    }
    return present
}

// console.log(students([true, false, true, true]))

const squareDigi = (integer) => {
    integer = String(integer);
    integer = integer.split("");
    let map = integer.map(x => Math.pow (x, 2));
    let number = map.join('');
    return parseInt(number)
}

// console.log(squareDigi(15))

const century = (year) => {
    return Math.ceil(year/100)
}

// console.log(century(2001))

const binary = (array) => {
   const binaryString = array.join("");
   return parseInt(binaryString, 2);
};

// console.log(binary([1, 1, 0, 0]))

module.exports = {
    add,
    myArray,
    multiply,
    mySeries,
    food,
    arrayOfSix,
    word,
    planet,
    students,
    squareDigi,
    century,
    binary
}

