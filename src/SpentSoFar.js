import React from 'react';

function SpentSoFar({ spentSoFar }) {
  return <h2 style={{ backgroundColor:"#cff4fc",padding:"10px",borderRadius:"8px",border:"1px #9eeaf9 solid",color:"#087990" }
  }>Spent so far: Rs.{spentSoFar}</h2>;
}

export default SpentSoFar;
