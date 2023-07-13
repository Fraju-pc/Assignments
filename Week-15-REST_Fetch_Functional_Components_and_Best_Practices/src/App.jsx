import { useEffect, useState } from 'react'
import AddCustomer from './AddCustomer';
import DisplayCustomer from './DisplayCustomer';
import EventTotals from './EventTotals';



function App() {
  const Mock_Api_URL = "https://64ac57549edb4181202f72fb.mockapi.io/lab_endpoint"

  const [customer, setCustomer] = useState([{}]);

  const [totals, setTotals] = useState([])
  
  const [newCustomerName, setCustomerName] = useState('');
  
  const [customerFoodChoice, setCustomerFoodChoice] = useState('');
  
  const [customerEvent, setCustomerEvent] = useState('Wedding');

  const [updatedCustomer, setUpdatedCustomer] = useState('');
  
  const [updatedFoodChoice, setUpdatedFoodChoice] = useState('');
  
  const [updatedCustomerEvent, setUpdatedCustomerEvent] = useState('Wedding');

  function getCustomers(){
    fetch(Mock_Api_URL)
    .then(data => data.json())
    .then(data => setCustomer(data))
    .finally(tallyUp(customer))
  };
  
  useEffect(()=> {
    getCustomers()
    //tallyUp(customer)
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
    }).then(() => getCustomers()).then(setCustomerName(''),
    setCustomerFoodChoice(''),
    setCustomerEvent(''))
    
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

  function tallyUp(data){
    
    const tally = Object.entries(
      data.reduce((acc, obj) => {
        const { foodChoice } = obj;
        acc[foodChoice] = (acc[foodChoice] || 0) + 1;
        return acc;
      }, {})
    );
    
   
    setTotals(tally);
  
    //console.log(totals);
  }


  return (
    
    <div className="App" >
     
      <div className='row'>
        <div className='col-md-6'>
        <AddCustomer setCustomerName={setCustomerName} 
        setCustomerFoodChoice={setCustomerFoodChoice} 
        setCustomerEvent={setCustomerEvent}
        postNewCustomer={postNewCustomer}
        newCustomerName={newCustomerName}
        customerFoodChoice={customerFoodChoice}
        customerEvent={customerEvent}/>
        </div>
        {/* {<div className='col-md-6'>
          <EventTotals Mock_Api_URL={Mock_Api_URL}/>
        </div>} */}
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
