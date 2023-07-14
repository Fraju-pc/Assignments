//imports
import '../src/modal.css'

//Function to Update existing customer
export default function UpdateCustomer({onClose, hide, setUpdatedCustomer, updatedCustomer, updatedFoodChoice, 
    setUpdatedFoodChoice, updatedCustomerEvent, setUpdatedCustomerEvent, updateCustomer, customer}){

    //if show is false, the modal is hidden
    if (!hide){
        return null
    }

    //Html Ouput
    return(
        <>
        <div id="modal">
             <div id="modal-content">
                 <div id="modal-header">
                     <h3 id="modal-title">Update This Customer</h3>
                </div>
                 <div id="modal-body">
                    <form>
                        <label>Name:</label><br></br>
                        <input value={updatedCustomer} onChange={(e) => setUpdatedCustomer(e.target.value)}></input><br></br>
                        <label>Food Choice:</label><br></br>
                        <select value={updatedFoodChoice} onChange={(e) => setUpdatedFoodChoice(e.target.value)}>
                            <option value="-1">Select</option>
                            <option value="Beef Dinner">Beef Dinner</option>
                            <option value="Chicken Dinner">Chicken Dinner</option>
                            <option value="Chili-P Sandwich">Chili-P Sandwich</option>
                            <option value="Salmon Dinner">Salmon Dinner</option>
                        </select><br></br>
                        <label>Customer Event:</label><br></br>
                        <select value={updatedCustomerEvent} onChange={(e) => setUpdatedCustomerEvent(e.target.value)}>
                            <option value="Wedding">Wedding</option>
                        </select> <br></br><br></br>
                        <button className='btn btn-warning' onClick={(e) => updateCustomer(e, customer)}>Submit</button>
                        <br></br><br></br>
                    </form>
                 </div>
                <div id="modal-footer">
                    <button onClick={onClose} className="btn btn-danger">Close</button>
                </div>
            </div>
    </div>
        </>
         
       
    )
}

{/**/}