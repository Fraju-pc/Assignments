var x = 10;
{
    let x = 2;
    // new value for X, just for this block of code
    console.log(x);
}
console.log(x);

const pi = 3.14159;

console.log(pi);
 //pi = 6; will not work
 console.log(pi);

let firstName = 'Mickey';
let lastName = 'Mouse';
let street = '1 Main St.';
let city = 'Disneyland';
let state = 'CA';

console.log(`${firstName} ${lastName} lives at 
${street} ${city}, ${state}.`);

let myString = `Hello
World 
my name
is Patrick`;
console.log(myString);

console.log(`Six times Five = ${5 * 6}`);

const createFullname = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(createFullname('Tom', 'Brady'));

const someFunction = (a, b) => {
    let result = "";
    for (let i = 0; i < b; i++){
        result += a;
    }
    return result;
}

console.log(someFunction('Hello ', 3));

const powerFunction = (base, exp) => { return base**exp };

console.log(powerFunction(2,2));
console.log(powerFunction(4,2));
console.log(powerFunction(2,4));

const power = (base, exp) => {
    let result = 1;
    for (let count = 0; count < exp; count++) {
        result *= base;
    }
    return result;
    };
    
    console.log(power(2,2));
    console.log(power(4,2));
    console.log(power(2,4));

// doSomethingThatReturnsAPromise()
//     .then((value) => {
//         console.log(value);
//     }).catch((err) =>{
//         console.error(err);
//     });


//promises promises
// const booleanFlag = true;
// let trueOrFalse = new Promise((resolve, reject) => {
// if (booleanFlag) {
//     resolve("The flag is true!");
//     } else {
//     reject("The flag is false!");
//     }
// });
// // This will print out the promise that you've just declared
// console.log(trueOrFalse);

// trueOrFalse
// .then(function successValue(result) {
//         console.log(result);
//     })
//     .then(function successValue2() {
//         console.log("You can call multiple functions this way.");
//     })
//     .catch(function failureValue(reject) {
//     console.log(reject);
// });

const customers = [
    {
        name: 'Sam',
        address: {
            street: '1234 W Bell Rd',
            city: 'Phoenix',
            zip: '85308',
            state: 'AZ'
        },
        membershipLevel: 'GOLD',
        age: 32
    },
    {
        name: 'Jojo',
        address: {
            street: '4 Tupple Street.',
            city: 'Milwaukee',
            zip: '50505',
            state: 'WI'
        },
        membershipLevel: 'SILVER',
        age: 32
    },
    {
        name: 'Pickle',
        address: {
            street: '4 Tupple Street.',
            zip: '50505',
            state: 'WI'
        },
        membershipLevel: 'SILVER',
        age: 32
    },
    {
        name: 'cickle',
        address: {
            street: '4 Tupple Street.',
            zip: '50505',
            state: 'WI'
        },
        membershipLevel: 'SILVER',
        age: 32
    },
    {
        name: 'Jimmy',
        address: {
            street: '4 Tupple Street.',
            city: 'Peoria',
            zip: '50505',
            state: 'AZ'
        },
        membershipLevel: 'SILVER',
        age: 32
    },
    {
        name: 'Debbie',
        address: {
            street: '5678 Main Street.',
            zip: '03055',
            state: 'NH'
        },
        membershipLevel: 'SILVER',
        age: 21
    },
];

const matchingCustomers = (custArray) => {
    let resultArray = [];
    for (let customer of custArray) {
    
    // name starts with a 'C' -- convert to uppercase for comparison
    if((customer.name.charAt(0).toUpperCase() == 'C')
    
     ||
    
    // address contains no undefined fields
         (  (customer.address.street !== undefined) 
    && (customer.address.city !== undefined)
    && (customer.address.zip  !== undefined)
    && (customer.address.state  !== undefined) )
    
     ||
    
    // the city is Peoria and the state is AZ
        (  ( customer.address.city == 'Peoria')  &&   (customer.address.state == 'AZ') )
    
     ||
    
    // membership level is GOLD or PLATINUM unless the customer is younger than 29, then SILVER is okay too
         (  (customer.membershipLevel =="GOLD")
    || ( customer.membershipLevel == "PLATINUM")
    || ( ( customer.membershipLevel == "SILVER")   &&   ( customer.age < 29) ) )
    
     ) {
    resultArray.push(customer);
    } else {
    console.log(`${customer.name} doesn't fit criteria!`);
    }
    }
    return resultArray;
    }
    
    console.log(matchingCustomers(customers));


