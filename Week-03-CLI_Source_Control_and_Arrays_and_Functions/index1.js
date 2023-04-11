var dvdPlayer = {
    height: 3,
    width: 18,
    depth: 12,
    weight: 7,
    color: 'black',
    dvdName: 'Star Wars',
    printDVDName: function() {
        console.log(this.dvdName);
    }
};

console.log(dvdPlayer.depth);
dvdPlayer.printDVDName();

var contactOne = {
    firstName:"Mickey",
    lastName: "Mouse",
    address: {
    street: "1 Main Street",
    city: "Disneyworld",
    state: "FL",
    zip: "32836"
    },
    phone: "123-456-7890",
    notes: ""
    };

console.log(contactOne.firstName + " " + contactOne.lastName 
+  " lives in " + contactOne.address.city + " " 
+ contactOne.address.state);

//Array Map Fucntion
let names = ['Sam', 'Tom', 'Eric', 'Sally', 'nicholas'];
let lengths = names.map(function(element){
    return element.length;
});
console.log(lengths);

//Array Reduce Funtion
let sum = lengths.reduce(function(accumulator, currentValue){
    //adds up the value of each elements length
    return accumulator + currentValue;
});
console.log(sum);

//Array for each function
names.forEach(function(element){
    //prints out each element
    console.log(element);
});

//Array Filter method
let evens = names.filter(function(element){
    //returns only the elements that are of even length
    return element.length % 2 == 0;
});
console.log(evens);

//array splice method, first parameter is the element to start at
//second parameter is how many elements to remove
let removedElement = names.splice(1, 1);
console.log(removedElement);

// Book example
let fullName = "Mary" + " " + "Brown"; 
let gradesArray = [100, 79, 80, 90, 100];
const isPassing = (currentValue) => currentValue >= 70;

console.log("\n\nStudent: " + fullName);
console.log("Grades: ");
for (let i = 0; i < gradesArray.length; i++) { 
console.log("\t" + (i+1) + ": " + gradesArray[i]);
}
console.log("Evaluation: ");

if (gradesArray.every(isPassing)) {
console.log('\tEvery grade is a passing grade (>= 70)!');
} else {
console.log('\tNot all grades are passing.  A passing grade is >= 70!');
}
 //same example with lower grade pushed in
gradesArray.push(55);
console.log("\n\nStudent: " + fullName);
console.log("Grades: ");
for (let i = 0; i < gradesArray.length; i++) { 
console.log("\t" + (i+1) + ": " + gradesArray[i]);
}
console.log("Evaluation: ");

if (gradesArray.every(isPassing)) {
console.log('\tEvery grade is a passing grade (>= 70)!');
} else {
console.log('\tNot all grades are passing.  A passing grade is >= 70!');
}