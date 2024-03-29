import React, { useState } from 'react';

function AddExpense({ addExpense }) {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(name, Number(cost));
    setName('');
    setCost('');
  };

  return (
    <div>
      <h1>Add Expenses</h1>
      <form  onSubmit={handleSubmit}>
       <div style={{display:"flex", justifyContent:"space-between", }}>
        <div  > <label style={{display:"block", marginBottom:"10px",fontSize:"20px"}}>
          Name:
          <input style={{width:"400px",height:"35px",display:"block",fontSize:"20px" }}
           type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        </div>

        <div>
        <label style={{display:"block", marginBottom:"10px",fontSize:"20px"}}>
          Cost:
          <input  style={{width:"400px",height:"35px",display:"block",fontSize:"20px",}} type="number" value={cost} onChange={(e) => setCost(e.target.value)} />
        </label>
        </div>
        </div>
        <input style={{display:"block", height:"40px",width:"60px",  backgroundColor:"#0d6efd", borderStyle:"none", color:"white",borderRadius:"5px"}} type="submit" value="Save" />
      </form>
    </div>
  );
}

export default AddExpense;
