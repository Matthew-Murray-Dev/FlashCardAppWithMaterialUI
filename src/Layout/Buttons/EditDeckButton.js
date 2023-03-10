import React from "react";
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useRouteMatch, useHistory,useParams } from "react-router-dom";

function EditDeckButton()
{const { url } = useRouteMatch();
const history=useHistory();

return (
  <div className="EditDeckButton">
    <Button className="btn mr-2" 
      variant="contained" style={{"backgroundColor":"#737373"}} startIcon={<EditIcon/>} onClick={() => history.push(`${url}/edit`)}>Edit</Button>
  </div>
);}
//onClick={() => history.push(`${url}decks/${deck.id}/study`)}
export default EditDeckButton;