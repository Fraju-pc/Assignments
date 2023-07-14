//Add Customer Function
export default function AddCustomer({setCustomerName, setCustomerFoodChoice, setCustomerEvent, 
    postNewCustomer, newCustomerName, customerFoodChoice, customerEvent}){
    
    //Function to handle submit button click    
    function handlePost(e){
        //callback function to main App
        postNewCustomer(e);
        }

    //HTML Output for Add Customer form
    return(
        <form>
        <h2>Add New Customer</h2>
        <label>Customer Name:</label><br></br>
        <input value={newCustomerName}onChange={(e) => setCustomerName(e.target.value)}></input><br></br>
        <label>Food Choice:</label><br></br>
        <select value={customerFoodChoice} 
        placeholder="Make Food Selection"
        onChange={(e) => setCustomerFoodChoice(e.target.value)}>
            <option value="-1">Select</option>
            <option value="Beef Dinner">Beef Dinner</option>
            <option value="Chicken Dinner">Chicken Dinner</option>
            <option value="Chili-P Sandwich">Chili-P Sandwich</option>
            <option value="Salmon Dinner">Salmon Dinner</option>
        </select><br></br>
        <label>Event:</label><br></br>
        <select value={customerEvent} onChange={(e) => setCustomerEvent(e.target.value)}>
        <option value="Wedding">Wedding</option>
        </select> <br></br><br></br>
        <button className='btn btn-primary' onClick={(e) => handlePost(e)}>Submit</button>
        <br></br><br></br>

      </form>
    )
} 