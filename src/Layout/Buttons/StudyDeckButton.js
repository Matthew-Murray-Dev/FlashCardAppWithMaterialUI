import React from "react";
import { Button } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useHistory } from "react-router-dom";

function StudyDeckButton({deck}){
 
    const history=useHistory();

    return (
      <div className="StudyButton">
        <Button className="btn mr-2" 
          variant="contained" startIcon={<MenuBookIcon/>} onClick={() => history.push(`/decks/${deck.id}/study`)}>Study</Button>
      </div>
    );}

export default StudyDeckButton;