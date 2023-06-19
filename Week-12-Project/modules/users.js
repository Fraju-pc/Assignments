//creates the User class Objects
class User {
    constructor(name, pw) {
      this.name = name;
      this.pw = pw;
    
    }
  }
//function to add new user to class
  function addUser() {
    // Get form values
    const name = document.getElementById("new-user").value;
    const pw = document.getElementById("new-password").value;

    // Create new Chore object
    const person = new User(name, pw);
  
    //push to Api
    postApi(person);
  
    //refresh page to clear existing tables
    location.reload();
  }

//function to post to the Api
function postApi(person){
    let uname = person.name;
    let upw = person.pw;
    
      $.post("https://6489d1fc5fa58521cab04f75.mockapi.io/logins", 
              { 
                      "name": uname,
                      "password": upw,  
              }
      );
  }

  //event listener
  document.getElementById('add').addEventListener('click', addUser);