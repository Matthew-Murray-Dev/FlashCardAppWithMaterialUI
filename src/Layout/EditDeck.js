import React, { useState } from "react";
import CancelButton from "./Buttons/CancelButton";
import SubmitEditDeckButton from "./Buttons/SubmitEditDeckButton";
import BreadcrumbNav from "./Buttons/BreadcrumbNav";
import { useHistory } from "react-router-dom";
import { updateDeck } from "../utils/api";

//update functionality, also figure out how to take in initial data...pulling etc. promises are a pain
function EditDeck({deck}) {

    const initialFormState={name:deck.name,description:deck.description,id:deck.id};
    const [formData, setFormData] = useState({ ...initialFormState });
   const history=useHistory();
    
    const handleChange = ({ target }) => {
        setFormData({
      ...formData,
      [target.name]: target.value
    });
    };
    
    const handleFormSubmit = (event) => {
        event.preventDefault();
       updateDeck(formData)
    setFormData({...initialFormState})
    history.go(-1)//history.goBack() - history.push("/")
  }
    
    
    
      return (
        <div >
          <h1>Edit Deck</h1>
          <div><label htmlFor="name" >Name</label>
              <input type="text" id="name" name="name" placeholder="Deck Name" style={{width: "100%"}} required={true}  onChange={handleChange} value={formData.name} 
                  /></div>
          <div className="mt-3"><label htmlFor="description" >Description</label>
              <textarea id="description" name="description" placeholder="Brief description of the deck" rows={4} style={{width: "100%"}} required={true}  onChange={handleChange} value={formData.description} 
                  /></div>
                  <div className="row p-3"><CancelButton/><SubmitEditDeckButton handleFormSubmit={handleFormSubmit}/>
                  </div>
                  
          
        </div>
      );
    }

export default EditDeck;