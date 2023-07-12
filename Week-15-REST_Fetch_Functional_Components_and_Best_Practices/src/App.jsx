import { useEffect, useState } from 'react'
import AddCustomer from './AddCustomer';
import DisplayCustomer from './DisplayCustomer';



function App() {
  const Mock_Api_URL = "https://64ac57549edb4181202f72fb.mockapi.io/lab_endpoint"

  const [customer, setCustomer] = useState([{}]);
  
  const [newCustomerName, setCustomerName] = useState('');
  
  const [customerFoodChoice, setCustomerFoodChoice] = useState('');
  
  const [customerEvent, setCustomerEvent] = useState('');

  const [updatedCustomer, setUpdatedCustomer] = useState('');
  
  const [updatedFoodChoice, setUpdatedFoodChoice] = useState('');
  
  const [updatedCustomerEvent, setUpdatedCustomerEvent] = useState('');

  function getCustomers(){
    fetch(Mock_Api_URL)
    .then(data => data.json())
    .then(data => setCustomer(data))
  };
  
  useEffect(()=> {
    getCustomers()
  }, [])

  function deleteCustomer(id){
    fetch(`${Mock_Api_URL}/${id}`, {
      method: 'DELETE'
    }).then(() => getCustomers())
  };
  
  function postNewCustomer(e){
    e.preventDefault();

    fetch(Mock_Api_URL, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        name: newCustomerName,
        foodChoice: customerFoodChoice,
        event: customerEvent,
      })
    }).then(() => getCustomers())
    
  };

  function updateCustomer(e, userObject){
    e.preventDefault();

    let updatedUserObject = {
      ...userObject,
      name: updatedCustomer,
      foodChoice: updatedFoodChoice,
      event: updatedCustomerEvent,
    }

    fetch(`${Mock_Api_URL}/${userObject.id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedUserObject),
      headers: {"Content-Type": "application/json"},

    }).then(() => getCustomers())
  };


  return (
    
    <div className="App" >
     
      <div className='row'>
        <AddCustomer setCustomerName={setCustomerName} 
        setCustomerFoodChoice={setCustomerFoodChoice} 
        setCustomerEvent={setCustomerEvent}
        postNewCustomer={postNewCustomer}/>
      </div>
      
      <div>
        {customer.map((customer, index) => (
        <DisplayCustomer 
        key={index}
        customer={customer} 
        index={index} 
        deleteCustomer={deleteCustomer}
        setUpdatedCustomer={setUpdatedCustomer}
        setUpdatedFoodChoice={setUpdatedFoodChoice}
        setUpdatedCustomerEvent={setUpdatedCustomerEvent}
        updateCustomer={updateCustomer}/>
        ))}
      </div>
    </div>
  )

}

export default App
