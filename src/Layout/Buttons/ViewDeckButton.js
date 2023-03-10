import React from "react";
import { Button } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useRouteMatch, useHistory } from "react-router-dom";

function ViewDeckButton({deck}){
    const { url } = useRouteMatch();
    const history = useHistory();
    return (
        <div className="ViewDeckButton">
          <Button type="button" className="btn mr-2" style={{"backgroundColor":"#737373"}}
            variant="contained" startIcon={<VisibilityIcon/>} onClick={() => history.push(`${url}decks/${deck.id}`)} >View</Button>
        </div>
      );
}

export default ViewDeckButton;