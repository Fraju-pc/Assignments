import React, { useEffect, useState} from 'react';

export default function EventTotals( { Mock_Api_URL } ){

    const [data, setData] = useState([])

    function getData(){
        fetch(Mock_Api_URL)
        .then(data => data.json())
        .finally(data => setData(data))
        
      };
      
      useEffect(()=> {
        getData()
        //tallyUp(customer)
      }, [])
    

    return(
        <table id="1a">
            <thead>
            <tr>
                <th>Food Choice:</th>
                <th>Total Amount:</th>
            </tr>
            </thead>
            <tbody>
            {data.map(([category, count]) => 
            <tr >
                <td>{category}</td>
                <td>{count}</td>
            </tr>)}
            </tbody>
        </table>
    )
}