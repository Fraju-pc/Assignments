
export default function AddCustomer({setCustomerName, setCustomerFoodChoice, setCustomerEvent, postNewCustomer}){
    
    function handlePost(e){
       
        postNewCustomer(e);

        setCustomerName('')
        setCustomerFoodChoice('')
        setCustomerEvent('')

    }
    return(
        <form>
        <h2>Add New Customer</h2>
        <label>Customer Name:</label><br></br>
        <input onChange={(e) => setCustomerName(e.target.value)}></input><br></br>
        <label>Food Choice:</label><br></br>
        <input onChange={(e) => setCustomerFoodChoice(e.target.value)}></input><br></br>
        <label>Event:</label><br></br>
        <input onChange={(e) => setCustomerEvent(e.target.value)}></input> <br></br><br></br>
        <button className='btn btn-primary' onClick={(e) => handlePost(e)}>Submit</button>
        <br></br><br></br>

      </form>
    )
} 