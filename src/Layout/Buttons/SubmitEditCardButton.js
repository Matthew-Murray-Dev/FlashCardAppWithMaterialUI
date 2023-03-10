import React from "react";
import { Button } from '@mui/material';


function SubmitEditCardButton({handleFormSubmit}){
  

  return (
    <div className="SubmitEditCardButton">
      <Button className="btn" 
        variant="contained" onClick={handleFormSubmit} >Submit</Button>
    </div>
  );
}

export default SubmitEditCardButton;
