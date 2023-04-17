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
const booleanFlag = true;
let trueOrFalse = new Promise((resolve, reject) => {
if (booleanFlag) {
    resolve("The flag is true!");
    } else {
    reject("The flag is false!");
    }
});
// This will print out the promise that you've just declared
console.log(trueOrFalse);

trueOrFalse
.then(function successValue(result) {
        console.log(result);
    })
    .then(function successValue2() {
        console.log("You can call multiple functions this way.");
    })
    .catch(function failureValue(reject) {
    console.log(reject);
});