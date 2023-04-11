var loggedIn = false;
var attempts = 0;
while (!loggedIn && attempts < 3) {

    var username = prompt('Username:');

    var password = prompt('Password:');

    if (username == 'Patrick' && password == '123456') {

        alert('Welcome back, ' + username);

        loggedIn = true;

    } else {
        
        alert('Inaccurate credentials! \nYou will be locked out after 3 Failed Attempts \nFailed log in attempts: ' + (attempts + 1));

        attempts++
        

    }

}