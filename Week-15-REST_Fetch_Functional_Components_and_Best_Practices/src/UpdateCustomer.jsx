import '../src/modal.css'

export default function UpdateCustomer({onClose, hide, setUpdatedCustomer, 
    setUpdatedFoodChoice, setUpdatedCustomerEvent, updateCustomer, customer}){

    //if show is false, the modal is hidden
    if (!hide){
        return null
    }

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
                        <input onChange={(e) => setUpdatedCustomer(e.target.value)}></input><br></br>
                        <label>Food Choice:</label><br></br>
                        <input onChange={(e) => setUpdatedFoodChoice(e.target.value)}></input><br></br>
                        <label>Customer Event:</label><br></br>
                        <input onChange={(e) => setUpdatedCustomerEvent(e.target.value)}></input> <br></br><br></br>
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