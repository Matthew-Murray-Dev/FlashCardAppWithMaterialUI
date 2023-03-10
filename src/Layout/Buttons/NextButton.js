import React from "react";
import { Button } from '@mui/material';
import { useHistory } from "react-router-dom";

function NextButton({count,setCount,flip,setFlip,length}){
    const history=useHistory();
    const handleClick=(event)=>{
        setFlip(!flip)
        count<length-1 ? setCount(count+1) : windowConfirm()
        
    }

    const windowConfirm=()=>{
        window.confirm(`Restart Cards?\n\nClick 'cancel' to return to the home page menu`) ? setCount(0):history.push("/")
    }

    
       
    return (
    <div className="SubmitEditCardButton">
      <Button className="btn" 
        variant="contained" onClick={handleClick}  >Next</Button>
    </div>
  );}

export default NextButton;