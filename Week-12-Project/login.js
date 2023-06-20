class User {
    constructor(name, pw) {
      this.name = name;
      this.pw = pw;
    
    }
  }

//array to store Api Data
let logins = [];

//pull from Api
function getApi(){
  $.get('https://6489d1fc5fa58521cab04f75.mockapi.io/logins', (data) =>{
    //loop to iterate through the api data
    for(let i=0; i < data.length; i++ ){
        //creating array of api objects
        const name = data[i].name;
        const pw = data[i].password;
        const person = new User(name, pw);
        logins.push(person);
        
    }
});
};

//Main function to check entered values versus logins
function login(){
    //get values from form
    let uname = document.getElementById('username').value;
    let upw = document.getElementById('password').value;
   
    //set object from form data
    const login = new User (uname, upw);

    for (let i = 0; i < logins.length; i++) {
      const attempt = logins[i];
      
      // Compare the properties of the current object with the given object
      if (compareObjects(login, attempt)) {
        //console.log(attempt);
        pageLogin(attempt);

      } 
    }
    
    //pageLogin();
};

// Helper function to compare two objects
function compareObjects(obj1, obj2) {
  // Get the keys of obj1
  const keys = Object.keys(obj1);
  
  // Compare the values of each key in obj1 and obj2
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    
    if (obj1[key] !== obj2[key]) {
      // Values are different, objects don't match
      return false; 
    }
  }
  // All values are the same, objects match
  return true; 
}



//function to determine which page to log into
function pageLogin(attempt){
console.log(attempt.name);

switch(attempt.name){
  case "Admin":
    window.location.href='./pages/admin.html'
  break;
  case "Ayla":
    window.location.href='./pages/alist.html'
  break;
  case "Braiden":
    window.location.href='./pages/blist.html'
  break;
  case "Callan":
    window.location.href='./pages/clist.html'
  break;
  case "Delaney":
    window.location.href='./pages/dlist.html'
  break;

  default:
    alert("Username or Password Not Found");
    location.reload();
    
}

};


//call to populate array from api
getApi();

//event listener
document.getElementById('login').addEventListener('click', login);