import React from "react";
import { Button } from '@mui/material';

import { useHistory } from "react-router-dom";

function DoneButton(){
  const history=useHistory();

  return (
    <div className="DoneButton">
      <Button type="button" className="btn mr-2" style={{"backgroundColor":"#737373"}}
        variant="contained" onClick={() => history.goBack()} >Done</Button>
    </div>
  );
}

export default DoneButton;
