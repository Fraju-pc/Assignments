import { useState } from "react"

export default function LoginForm(){
   //States to pull from form
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  
  const handleLogin = (e) => {

   e.preventDefault();
   
   // console.log('Username:', username);
   // console.log('Password:', password);

   //default array of users, keeping it pretty simple here
   const users = [
      { username: 'Admin', password: 'asdf', id: 1 },
      { username: 'User1', password: 'qwer', id: 2 },
      { username: 'User2', password: 'uiop', id: 3 },
    ];
    //check for match
    const matchedUser = users.find(
      (user) => user.username === userName && user.password === passWord
    );

    if (matchedUser) {
      // Redirect to the new webpage       
      window.location.href = '../pages/landing.html'; 
    } else {
      // alert for no match
      alert('Invalid username or password');
      //reset fields
      setUserName('');
      setPassWord('');
      
    }

 };
  //html form
   return (
      
      <>
      <br/>
      <br/>
      <div id="wrapper">
         <h3>Log In</h3>
         <br/>
            <div className="loginForm">
            <form onSubmit={handleLogin}>
               <label for="username">User Name:</label><br/>
               <input type="text"  id="username" value={userName} placeholder="User Name"
               onChange={(e) => setUserName(e.target.value)} />
            
               <br/><br/>

               <label for="password">Password:</label><br/>
               <input type="password" class="form-control" id="password" value={passWord} placeholder="Password"
               onChange={(e) => setPassWord(e.target.value)} />
            

               <br/><br/>
               <button id="login" type="submit">Login</button>
            </form>
            </div>
      </div>
      </>
   )
}