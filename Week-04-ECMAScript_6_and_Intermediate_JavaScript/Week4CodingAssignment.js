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
        sum = sum + arr3[i];
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

