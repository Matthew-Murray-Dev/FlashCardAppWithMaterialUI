import React from "react";
import { Button } from '@mui/material';



function flipButton({flip,setFlip}){return (
    <div className="FlipButton">
      <Button type="button" className="btn mr-2" style={{"backgroundColor":"#737373"}}
        variant="contained" onClick={() => setFlip(!flip)} >Flip</Button>
    </div>
  );}

export default flipButton;