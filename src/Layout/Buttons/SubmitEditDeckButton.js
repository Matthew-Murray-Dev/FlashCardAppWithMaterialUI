import React from "react";
import { Button } from '@mui/material';



function SubmitEditDeckButton({handleFormSubmit}){


  return (
    <div className="SubmitEditDeckButton">
      <Button className="btn" 
        variant="contained" onClick={handleFormSubmit} >Submit</Button>
    </div>
  );
}

export default SubmitEditDeckButton;
