export default function LoginForm(){
   return (
 <div className="loginForm">
        <form>
            <label for="username">User Name:</label><br/>
            <input type="text"  id="username" placeholder="User Name"/>
            
            <br/><br/>

            <label for="password">Password:</label><br/>
            <input type="password" class="form-control" id="password" placeholder="Password"/>
            

            <br/><br/>
            <button id="login" type="submit">Login</button>
        
        </form>
</div>
   )
}

{}