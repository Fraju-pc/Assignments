//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
console.log("1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.");

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array
console.log("1a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array");

const firstFromLast = (arr1) => arr1[arr1.length-1] - arr1[0];
  
//invoke fucntion and console.log result
console.log(firstFromLast(ages));

//1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
console.log("1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).");

//new function adds item to array and then recalls firstFromLast to perform the same action on the new array
const dynamic = (arr2) => {
    arr2.push(55);
    //console.log(arr2);
    return firstFromLast(arr2);
}
//invoke fucntion and console.log result
console.log(dynamic(ages));

//1c.	Use a loop to iterate through the array and calculate the average age. 
console.log("1c.	Use a loop to iterate through the array and calculate the average age. ");

const averageAge = (arr3) => {
    //loop
    let sum = 0;
    for(i=0; i< arr3.length; i++)
    {   //gathering data into a holder variable
        sum += arr3[i];
        //console.log(arr3[i]);
        
    } 
    //calculate average
    return sum / (arr3.length);
}
//invoke fucntion and console.log result
console.log(averageAge(ages));

//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
console.log(`2.	Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.`);

names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
console.log("2a.	Use a loop to iterate through the array and calculate the average number of letters per name. ");

//declare function
const findNumOfLetters = (arr4) => {
    //init variable
    let sum = 0;
    //loop to iterate and keep running sum of element lengths 
    for(j = 0; j < arr4.length; j++){
        //console.log(arr4[j].length);
        sum += (arr4[j].length);
    }
    //calculate and return the average
    return sum / arr4.length;
}
//invoke fucntion and console.log result
console.log(findNumOfLetters(names));

//2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
console.log("2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.")

const combineNames = (arr5) => {
    //init variable
    let conCat = "";
    //loop to iterate and concatenate array elements into the new string
    for(k = 0; k < arr5.length; k++){
        conCat += (arr5[k] + " ");
        }
     //calculate and return the new string
     return conCat;
    
}
//invoke fucntion and console.log result
console.log(combineNames(names));

//3.	How do you access the last element of any array?
console.log("3.	How do you access the last element of any array?");

//console log to answer the question
console.log(`By using the Array.length - 1 method to find the last element of the array.
The last element of the names array is: ${names[(names.length -1)]}`);

//4. How do you access the first element of any array?
console.log("4.	How do you access the first element of any array?");

//Console log to answer the question
console.log(`By using the Array[0] index to find the first element of the array.
The first element of the names array is: ${names[0]}`);

//5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
console.log("5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.");

//declare new array
let nameLengths = [];

const sortLength = (arr6) =>{
//loop to iterate exisiting array and add lengths to new array
for(l = 0; l < arr6.length; l++) {
    //console.log(arr6[l].length)
    nameLengths.push(arr6[l].length);
}
return nameLengths;
}
//invoke fucntion and console.log result
console.log(sortLength(names));

//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
console.log("6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. ");

const sumNamesLength = (arr7) => {
    //loop
    let sum = 0;
    for(i=0; i< arr7.length; i++)
    {   //gathering data into a holder variable
        sum += arr7[i];
    } 
    //return sum
    return sum;
}
//invoke fucntion and console.log result
console.log(sumNamesLength(nameLengths));

//7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
console.log("7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').");

const wordConCat = (word, n) => {
    //init variable
    let newString = "";
    //loop to concatenate chosen string the chosen number of iterations
    for (let i = 0; i < n; i++){
        newString += word;
    }
    //return the new string
    return newString;
}
//invoke fucntion and console.log result
console.log(wordConCat('Hello', 3));

//8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.
console.log("8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.");

//create function
const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

//invoke fucntion and console.log result
console.log(fullName('Patrick', 'Corcoran'));

//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
console.log("9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.");

const checkForOneHundred = (arr8) => {
    //loop
    let sum = 0;
    for(i=0; i< arr8.length; i++)
    {   //gathering data into a holder variable
        sum += arr8[i];
    } 
    //if statement to determine which boolean is returned
    if(sum > 100){
        return true;
    } 
    return false;
}
//invoke fucntion and console.log result
console.log(checkForOneHundred(ages));

//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log("10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.");

const arrayAverage = (arr9) => {
    //loop
    let sum = 0;
    for(i=0; i< arr9.length; i++)
    {   //gathering data into a holder variable
        sum += arr9[i];
        //console.log(arr3[i]);
        
    } 
    //calculate average
    return sum / (arr9.length);
}
//invoke fucntion and console.log result
console.log(arrayAverage(ages));

//11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
console.log("11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.");

const compareArrayAvg = (arr10, arr11) => {
    //call arrayAverage function to get array averages
    let avg10 = arrayAverage(arr10);
    let avg11 = arrayAverage(arr11);
    //if statement to compare the 2 array averages
    if(avg10 > avg11){
        return true;
    }
    return false;
}
//invoke fucntion and console.log result
console.log(compareArrayAvg(nameLengths, ages));

//12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
console.log("12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.");

const willBuyDrink = (param1, param2) => {
    //if statement to dtermine outcome
    if(param1 === true && param2 > 10.50){
        return true;
    }
return false;
}

//set variables to be used as the parameters
let isHotOutside = true;
let moneyInPocket = 11.00;

//invoke fucntion and console.log result
console.log(willBuyDrink(isHotOutside, moneyInPocket));

//13.	Create a function of your own that solves a problem.  
console.log("13.	Create a function of your own that solves a problem.   ");

//My kids love to play video games and it is a very common question every afternoon after school.
//However they all know that there are certain responisibilties that need to be handled first.
//Kids being kids they try to get around it, so I have written a simple program that will only 
//allow them to play if all of the conditions are met.

//prompt user for input
let washedHands = prompt(`Did you wash your hands?`);
let backPackEmptied = prompt(`Did you take everything out of your back pack?`);
let homeWorkDone = prompt(`Did you finish your homework?`);
let hadSnack = prompt(`Did you have a healthy snack?`);

//put data into array
let questions = [washedHands, backPackEmptied, homeWorkDone, hadSnack];
//console.log(questions)

//init functions
const isYes = (answer) => answer ==`yes`;

const canPlayVideoGames = (arr12) =>{
    //check if all elements in the array are equal to yes
    if(arr12.every(isYes) == true){
        return `Yes! You can Play video games!`
    }
return `No! You cannot play video games, takd care of your responsibilities first!`
};

//invoke fucntion and console.log result
console.log(canPlayVideoGames(questions));