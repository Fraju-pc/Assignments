//imports
import { useState } from 'react';
import UpdateCustomer from './UpdateCustomer';

//Display Customer function and props
export default function DisplayCustomer({customer, index, deleteCustomer, setUpdatedCustomer, 
  setUpdatedCustomerEvent, setUpdatedFoodChoice, updateCustomer}){

  //state variable to control whether the modal is visible or not  
  const [hide, setHide] = useState(false)

  //HTML Output
  return(
        <>
        <div className='row'>
        <div className='col-sm-6 border rounded p-2'>
        <div >
              <br></br>
              Name: {customer.name}<br></br>
              Food Choice: {customer.foodChoice}<br></br>
              Event: {customer.event}<br></br>
              
            <br></br>
            </div>
        </div>
      <div className='col-sm-6 border rounded p-2'>
        <h5>Delete This Customer</h5>
          <button className="btn btn-danger" onClick={() => deleteCustomer(customer.id)}>Delete</button>
        <h5>Update This Customer</h5>
          <button className='btn btn-warning' onClick={() => setHide(true)}>Update</button>
          <UpdateCustomer 
              key={index} 
              onClose={() => setHide(false)} 
              hide={hide} 
              setUpdatedCustomer={setUpdatedCustomer}
              setUpdatedFoodChoice={setUpdatedFoodChoice}
              setUpdatedCustomerEvent={setUpdatedCustomerEvent}
              updateCustomer={updateCustomer}   
              customer={customer}        
              />
      </div>
    </div>
    
    </>
    )
}