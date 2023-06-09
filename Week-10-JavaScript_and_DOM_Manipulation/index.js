//Global Variable

let id=0;

//Event Listener for Create Button, checks for which person task is being created for

document.getElementById('add').addEventListener('click', () =>{
  
   if(document.getElementById('assigned-person').value === 'Ayla') {
    let table = document.getElementById('a-list');
    let tasked = "Ayla";
    buildRow(table, tasked);
    id++
  } else if(document.getElementById('assigned-person').value === 'Braiden'){
    let table = document.getElementById('b-list');
    let tasked = "Braiden";
    buildRow(table, tasked);
    id++
  } else if(document.getElementById('assigned-person').value === 'Callan'){
    let table = document.getElementById('c-list');
    let tasked = "Callan";
    buildRow(table, tasked);
    id++
  } else if(document.getElementById('assigned-person').value === 'Delaney'){
    let table = document.getElementById('d-list');
    let tasked = "Delaney";
    buildRow(table, tasked);
    id++
  }

});

//function to build the table rows

function buildRow(table, tasked){
  let row = table.insertRow(1);
  row.setAttribute('id', `item-${id}`)
  row.insertCell(0).innerHTML = document.getElementById('assigned-task').value;
  row.insertCell(1).innerHTML = document.getElementById('date-assigned').value;
  
  let action1 = row.insertCell(2);
  action1.appendChild(createRadioButton(id, tasked));
 
  let action2 = row.insertCell(3);
  action2.appendChild(createDeleteButton(id));
  document.getElementById('assigned-task').value = '';
}

//function to create the completed task button, which sends an email to the admin

function createRadioButton(id, tasked){
  let radio = document.createElement('button');
  radio.className = 'btn btn-primary'
  radio.id = `task-${id}`;
  radio.innerHTML = 'Task Complete?';
  radio.type = 'submit';
  radio.addEventListener('click', () =>{
    let tasker = document.getElementById(`item-${id}`);
    //console.log(tasker);
    body = tasker.querySelector('td').innerHTML;
    //console.log(body);

    //portion that sends the email

    Email.send({
      SecureToken : "8ecfb263-ab0a-4888-99c5-c2ab74f26991",
      To : 'patrick.f.corcoran@gmail.com',
      From : 'thenderman82@gmail.com',
      Subject : "Completed Task",
      Body : 'Person: ' + tasked + ' Task: ' + body
    }).then(
    message => alert(message)
    );
  });
    
  return radio;
}

//function to create the delete button

function createDeleteButton(id){
    let btn= document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () =>{
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    
    return btn;
}

