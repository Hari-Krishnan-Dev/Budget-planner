import React from 'react';

function Budget() {
  const budget = 2000; // This will come from your state
  return <h2 style={{ backgroundColor:"#f8f9fa",padding:"10px",borderRadius:"8px",border:"1px #e9ecef solid",color:"grey" }
}>Budget: Rs.{budget}</h2>;
}

export default Budget;
