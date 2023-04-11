var customerNames = [];
customerNames.push('Sam Smith');
customerNames.push('Tommy Guns');

for(name of customerNames){
    console.log(name);
}
// Without Array
var firstName = "Mary";
var lastName = "Brown";
var assignmentOne = 100;
var assignmentTwo = 79;
var assignmentThree = 80;
var assignmentFour = 90;
var assignmentFive = 100;

console.log("Student: " + firstName + " " + lastName);
console.log("Grades:");
console.log("1: " + assignmentOne);
console.log("2: " + assignmentTwo);
console.log("3: " + assignmentThree);
console.log("4: " + assignmentFour);
console.log("5: " + assignmentFive);

//With Array
let gradesArray = []; 

gradesArray.push(100);
gradesArray.push(79);
gradesArray.push(80);
gradesArray.push(90);
gradesArray.push(100);
console.log("Student: " + firstName + " " + lastName);
console.log("Grades:");
for(i = 0; i < gradesArray.length; i++){
    console.log((i+1) + ": " + gradesArray[i]);
}

//Enhanced For loop with added elements
let fullName = "Mary" + " " + "Brown";
let counter = 1;

console.log("Student: " + fullName);
console.log("Grades: ");

for (let grade of gradesArray) {
    console.log((counter++) + ": " + grade);
}


gradesArray.push(85);

counter = 1;
console.log("Student: " + fullName);
console.log("Grades: ");

function lowestGrade (gradeBook) {
    if (gradeBook.length > 0) {
    let lowGrade=gradeBook[0];
    for (let grade of gradeBook) {
    if (grade < lowGrade) {
    lowGrade = grade;
    }
    }
    return lowGrade;
    } else {
        return 0;
    }
    }

for (let grade of gradesArray) {
    console.log((counter++) + ": " + grade);
}

console.log("Evaluation: ");
console.log("Lowest Grade is: " + lowestGrade(gradesArray));

//count to 99 fucntion
function countNinetyNine() {
    for(let jk = 0; jk < 100; jk++){
        console.log(jk);
    }
}

//countNinetyNine();

function createFullName(firstName, lastName){
    console.log(firstName + ' ' + lastName);
}
createFullName('Tom', 'Brady')

//Square Input Number
function squared(num1){
    console.log(num1 + " squared is: " + (num1 * num1));
}

squared(6);

//Exponents
function exponent(num2, num3){
    console.log(num2 + " to the power of " + num3 + " is: " + (num2 ** num3));
}
exponent(2, 3);
// end of file