import React from "react";
import { Button } from '@mui/material';


function SubmitNewDeckButton({handleFormSubmit}){
 

  return (
    <div className="SubmitButton">
      <Button className="btn" 
        variant="contained" onClick={handleFormSubmit} >Submit</Button>
    </div>
  );
}

export default SubmitNewDeckButton;
