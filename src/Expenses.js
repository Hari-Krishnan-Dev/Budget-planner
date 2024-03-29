
import React from 'react';

function Expenses({ expenses, removeExpense }) {
  return (
    <div>
      <h1>Expenses</h1>
      {expenses.map((expense, index) => (
        <div style={{border:"1px solid #D3D3D3", display:"flex" ,justifyContent:"space-between" ,height:"30px" , alignItems:"center" , backgroundColor:"whitesmoke" ,padding
               :"10px", borderRadius:"5px" ,marginBottom:"10px" ,fontSize:"19px"}} key={index}>
         <span>{expense.name}</span><span> Rs.{expense.cost}  
          <button style={{margin:"0 0 0 5px",borderRadius:"5px"}} onClick={() => removeExpense(index)}>x</button></span>
        </div>
      ))}
    </div>
  );
}

export default Expenses;
