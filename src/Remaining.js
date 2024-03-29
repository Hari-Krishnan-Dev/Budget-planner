import React from 'react';

function Remaining({ budget, spentSoFar }) {
  const remaining = budget - spentSoFar;
  return <h2 style={{ backgroundColor:"#f8f9fa",padding:"10px",borderRadius:"8px",border:"1px #e9ecef solid",color:"rgb(25 135 84)" }
}>Remaining: Rs.{remaining}</h2>;
}

export default Remaining;
