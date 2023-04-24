//classes

class Student {
    constructor(firstName, lastName, phoneNumber, grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }

    introduce() {
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`);
    }
}

let student1 = new Student('Tom', 'Brady', '5085556666', 'A');
let student2 = new Student('Sam', 'Lee', '5085557777', 'A');


student1.introduce();
student2.introduce();

class Animal {
    constructor(name, type, weight, height, location) {
        this.name = name;
        this.type = type;
        this.weight = weight;
        this.height = height;
        this.location = location;
    }
    
    describe() {
    console.log("Animal Description");
    console.log("------------------");
    console.log("\tName: " + this.name);
    console.log("\tType: " + this.type);
    console.log("\tWeight: " + this.weight + " lb.");
    console.log("\tHeight: " + this.height + " in.");
    console.log("\tLocation: " + this.location);
    }
}
    
let elephant = new Animal("Dumbo", "elephant", 8000, 108, "Disneyland");
elephant.describe();


//inheritence

class NotificationSender{
    constructor(status){
        this.status = status;
    }
    sendNotification(notification) {
        console.log(`Sending: ${notification}`);
    }

    findUsersWithStatus(status){
        let users = getUsers(status);
        return users;
    }
}

class PromotionSender extends NotificationSender {
    constructor(status){
        super(status);
    }
   

    calculateDiscount(status) {
        if (status === 'Gold'){
            return .3;
        } else if (status === 'SILVER'){
            return .15;
        }
        return 0;
    }
}

class CollectionsSender extends NotificationSender {
    constructor(){
        super(status);
    }
    calculateFee(status) {
        if (status === "OVERDUE"){
            return 10;
        } else if(status === "DELINQUENT") {
            return 25;
        }
        return 5;
    }

}

let collectionSender = new CollectionsSender("OVERDUE");
collectionSender.sendNotification('This is a collection sender test!');


class Person {
    constructor (newName, newAge) {
        this.name = newName;
        this.age = newAge;
    }
    introduce() {
        return `My name is ${this.name}, I am ${this.age} years old.`;
    }

}
class Teacher extends Person {
    constructor (name, age, courseName) {
        super(name, age);
        this.courseName = courseName;
    }
    introduceSelf() {
        console.log(`My name is ${this.name}, I am ${this.age} years old and I will be teaching your ${this.courseName} class.`);
    }
}
let teacher = new Teacher('Ms. Angle', 35, 'Trigonometry');
console.log(teacher.introduce());
teacher.introduceSelf();

//exceptions

try {
list.push('hello');

} catch (err){
    console.log(err);
} 

console.log('goodbye');