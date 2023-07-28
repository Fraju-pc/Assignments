    
export default function EmailAdmin({chore}){
    //portion that sends the email
    window.Email.send({
        SecureToken : "8ecfb263-ab0a-4888-99c5-c2ab74f26991",
        To : 'patrick.f.corcoran@gmail.com',
        From : 'thenderman82@gmail.com',
        Subject : "Completed Task",
        Body : 'Person: ' + chore.name + ' Task: ' + chore.task
      }).then(
        message => alert(message)
        //message => myModal.show((document.getElementById("message").innerHTML = message)) 
      );
}    
