import React from "react";
import { Button } from '@mui/material';

import { useHistory } from "react-router-dom";

function CancelButton(){
  const history=useHistory();

  return (
    <div className="CancelButton">
      <Button type="button" className="btn mr-2" style={{"backgroundColor":"#737373"}}
        variant="contained" onClick={() => history.goBack()} >Cancel</Button>
    </div>
  );
}

export default CancelButton;
