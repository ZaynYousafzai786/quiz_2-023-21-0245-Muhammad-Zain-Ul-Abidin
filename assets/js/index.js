//Task no 1
/*Task 1. Write a function that takes 2 parameters (1. number, 2nd total amount).
 And this function should return the percentage of total amount with that number. */


//Solution!!

const number = 25;
const totalAmount = 100;
const percentage = calculatePercentage(number, totalAmount);

function calculatePercentage(number, totalAmount) {
    if (totalAmount === 0) {
        return 0;
    }

    const percentage = (number / totalAmount) * 100;

    return percentage;
}

console.log(`The percentage of ${number} with respect to ${totalAmount} is ${percentage}%`);


//Task no 2
/*Task 2. Write an array of objects contains persons information objects, print following things: */


//Solution!
// Sample input array

const persons = [
    {
        id: 1,
        personName: "Fahad",
        personAge: "23",
        personIncome: "2000000"
    },
    {
        id: 2,
        personName: "Zoya",
        personAge: "23",
        personIncome: "3000000"
    }
];

console.log("Full Information of Persons:");
persons.forEach((person, index) => {
    console.log(`Person ID ${index + 1}:`);
    console.log(`Person name: ${person.firstName}`);
    console.log(`Age: ${person.personAge}`);
    console.log(`Person Income: ${person.personIncome}`);
    console.log();
});



//Task no 3

// sample value
const propertiesOfPerson = {
    id: 1,
    personName: "Fahad",
    personAge: "23",
    personIncome: "2000000"
}

const properties = Object.keys(sampleObject);

console.log("Properties are below:");
properties.forEach(property => {
    console.log(property);
});

// All are done!!

