//Imports
import { useEffect, useState } from 'react'
import AddCustomer from './AddCustomer';
import DisplayCustomer from './DisplayCustomer';
import EventTotals from './EventTotals';


//Main App Function
function App() {
  //Api Url
  const Mock_Api_URL = "https://64ac57549edb4181202f72fb.mockapi.io/lab_endpoint"

  //state for Api pull
  const [customer, setCustomer] = useState([]);
  //Stat for calculating totals
  const [totals, setTotals] = useState([])
  //Stateto add new customer data
  const [newCustomerName, setCustomerName] = useState('');
  const [customerFoodChoice, setCustomerFoodChoice] = useState('');
  const [customerEvent, setCustomerEvent] = useState('Wedding');
  
  //state to update customer data
  const [updatedCustomer, setUpdatedCustomer] = useState('');
  const [updatedFoodChoice, setUpdatedFoodChoice] = useState('');
  const [updatedCustomerEvent, setUpdatedCustomerEvent] = useState('Wedding');

  //Api Pull function
  async function getCustomers() {
    const response = await fetch(Mock_Api_URL)
    const data = await response.json();
    setCustomer(data);
    tallyUp(data);
  };
  
  //Useeffect to populate the page on loadin
  useEffect(()=> {
    getCustomers()
  }, [])

  //function to delete customer
  function deleteCustomer(id){
    fetch(`${Mock_Api_URL}/${id}`, {
      method: 'DELETE'
    }).then(() => getCustomers())
  };
  
  //Function to post new customer to the Api
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
    }).then(() => getCustomers()).then(setCustomerName(''),
    setCustomerFoodChoice(''),
    setCustomerEvent(''))
    
  };

  //Function to update existing customer on the Api
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

  //function to get the totals of every food choice and 
  //set the state that is passed to the event totals Component
  function tallyUp(data){
    
    const tally = Object.entries(
      data.reduce((acc, obj) => {
        const { foodChoice } = obj;
        acc[foodChoice] = (acc[foodChoice] || 0) + 1;
        return acc;
      }, {})
    );
    setTotals(tally);

  }

  //Html Output
  return (
    
    <div className="App" >
     
      <div className='row'>
        <div className='col-md-6 p-4'>
        <AddCustomer setCustomerName={setCustomerName} 
        setCustomerFoodChoice={setCustomerFoodChoice} 
        setCustomerEvent={setCustomerEvent}
        postNewCustomer={postNewCustomer}
        newCustomerName={newCustomerName}
        customerFoodChoice={customerFoodChoice}
        customerEvent={customerEvent}/>
        </div>
        {<div className='col-md-6 p-4'>
          <EventTotals totals={totals}/>
        </div>}
      </div>
      
      <div>
        {customer.map((customer, index) => (

        <DisplayCustomer 
        key={index}
        customer={customer} 
        index={index} 
        deleteCustomer={deleteCustomer}
        updatedCustomer={updatedCustomer}
        setUpdatedCustomer={setUpdatedCustomer}
        updatedFoodChoice={updatedFoodChoice}
        setUpdatedFoodChoice={setUpdatedFoodChoice}
        updatedCustomerEvent={updatedCustomerEvent}
        setUpdatedCustomerEvent={setUpdatedCustomerEvent}
        updateCustomer={updateCustomer}/>
        ))}
      </div>
    </div>
  )

}

export default App
