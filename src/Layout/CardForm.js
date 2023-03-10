import React, { useState} from "react";
import CancelButton from "./Buttons/CancelButton";
import DoneButton from "./Buttons/DoneButton";
import { createCard } from "../utils/api";
import SaveNewCardButton from "./Buttons/SaveNewCardButton";
import SubmitEditCardButton from "./Buttons/SubmitEditCardButton";
import { useHistory,Switch,Route } from "react-router-dom";
import { updateCard } from "../utils/api";




function CardForm({cardData={front:"",back:""},deckId}) {


    const initialFormState={...cardData,deckId:deckId};
    const [formData, setFormData] = useState({ ...initialFormState });
const history=useHistory();

    const handleChange = ({ target }) => {
        setFormData({
      ...formData,
      [target.name]: target.value
    });
    };

    
    const handleNewCardSubmit = (event) => {
        event.preventDefault();
        createCard(deckId,formData)
    setFormData({...initialFormState})
  history.go(-1)}

  const handleEditCardSubmit = (event) => {
    event.preventDefault();
        updateCard(formData)
setFormData({...initialFormState})
history.go(-1)}
    
    
  
        return (
        <div >
          <Switch>
                      <Route exact path={`/decks/${deckId}/cards/new`}><h3>Add Card</h3></Route>
                      <Route ><h3>Edit Card</h3></Route>
                      </Switch>
                    <div><label htmlFor="front" >Front</label>
          <textarea id="front" name="front" placeholder="Front side of card" rows={3} style={{width: "100%"}} required={true}  onChange={handleChange} value={formData.front} 
                  /></div>
          <div className="mt-3"><label htmlFor="back" >Back</label>
              <textarea id="back" name="back" placeholder="Back side of card" rows={3} style={{width: "100%"}} required={true}  onChange={handleChange} value={formData.back} 
                  /></div>
                  <div className="row p-3">
                    <Switch>
                      <Route exact path={`/decks/${deckId}/cards/new`}><DoneButton/><SaveNewCardButton handleFormSubmit={handleNewCardSubmit}/></Route>
                      <Route ><CancelButton/><SubmitEditCardButton handleFormSubmit={handleEditCardSubmit}/></Route>
                      </Switch>
                    
                  </div>
                  
                  
        </div>
      );
      
    }

export default CardForm;