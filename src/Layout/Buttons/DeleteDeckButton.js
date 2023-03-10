import React from "react";
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouteMatch, useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api";

function DeleteDeckButton({deck}){
  const {url}=useRouteMatch();
  const history= useHistory();
  const handleDelete = (event) => {
    event.preventDefault()
   windowConfirm()
   
   
}


const reDirect=()=>{deleteDeck(deck.id)
  history.push("/")}
const windowConfirm=()=>{window.confirm(`Delete this Deck?\n\nYou will not be able to recover it.`)? reDirect():history.push(url)}
    return (
    <div className="DeleteButton">
      <Button size="large" type="button" className="btn pr-2" style={{height:"36.5px",maxWidth: '36px',  minWidth: '36px' ,"backgroundColor":"#D9534f"}}
        variant="contained" startIcon={<DeleteIcon/>} onClick={handleDelete}></Button>
    </div>
  );

}

export default DeleteDeckButton;