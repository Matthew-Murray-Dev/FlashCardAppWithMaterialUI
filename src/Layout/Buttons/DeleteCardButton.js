import React from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouteMatch, useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api";

function DeleteCardButton({ id }) {
  const { url } = useRouteMatch();
  const history = useHistory();
  const handleDelete = (event) => {
    event.preventDefault();
    windowConfirm();
    history.go(0);
  };
  const windowConfirm = () => {
    window.confirm(`Delete this card?\n\nYou will not be able to recover it.`)
      ? deleteCard(id)
      : history.push(url);
  };
  return (
    <div className="DeleteButton float-right">
      <Button
        size="large"
        type="button"
        className="btn pr-2"
        style={{
          height: "36.5px",
          maxWidth: "36px",
          minWidth: "36px",
          backgroundColor: "#D9534f",
        }}
        variant="contained"
        startIcon={<DeleteIcon />}
        onClick={handleDelete}
      ></Button>
    </div>
  );

}

export default DeleteCardButton;
