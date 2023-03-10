import React from "react";
import { Button } from '@mui/material';



function SaveNewCardButton({handleFormSubmit}){


  return (
    <div className="SaveButton">
      <Button className="btn" 
        variant="contained" onClick={handleFormSubmit} >Save</Button>
    </div>
  );
}

export default SaveNewCardButton;
