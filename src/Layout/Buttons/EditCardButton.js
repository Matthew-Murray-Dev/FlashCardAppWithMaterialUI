import React from "react";
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useRouteMatch, useHistory } from "react-router-dom";

function EditCardButton({id}){
  const { url } = useRouteMatch();
const history=useHistory();

return (
  <div className="EditCardButton">
    <Button className="btn mr-2" 
      variant="contained" style={{"backgroundColor":"#737373"}} startIcon={<EditIcon/>} onClick={() => history.push(`${url}/cards/${id}/edit`)}>Edit</Button>
  </div>
);}
//onClick={() => history.push(`${url}decks/${deck.id}/study`)}
export default EditCardButton;