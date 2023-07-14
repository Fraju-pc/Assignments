//import React, { useEffect, useState} from 'react';

export default function EventTotals( { totals } ){


    

    return(
        <table className="table table-warning table-bordered table-striped" id="1a">
            <thead>
            <tr>
                <th>Food Choice:</th>
                <th>Total Amount:</th>
            </tr>
            </thead>
            <tbody>
            {totals.map(([category, count]) => 
            <tr >
                <td>{category}</td>
                <td>{count}</td>
            </tr>)}
            </tbody>
        </table>
    )
}