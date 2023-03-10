import React from "react";
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useHistory } from "react-router-dom";

function AddCardButton({ id }) {
    const history = useHistory();

  return (
    <div className="StudyButton">
      <Button className="btn"
        variant="contained" startIcon={<AddIcon />} onClick={() => history.push(`/decks/${id}/cards/new`)}>Add Cards</Button>
    </div>
  );
}

export default AddCardButton;