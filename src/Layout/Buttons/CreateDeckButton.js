import React from "react";
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useHistory } from "react-router-dom";

function CreateDeckButton() {
  
  const history=useHistory();

  return (
    <div className="CreateDeckButton">
      <Button type="button" className="mb-2" style={{"backgroundColor":"#737373"}}
        variant="contained" startIcon={<AddIcon/>} onClick={() => history.push(`/decks/new`)} >Create Deck</Button>
    </div>
  );
}
//
export default CreateDeckButton;
