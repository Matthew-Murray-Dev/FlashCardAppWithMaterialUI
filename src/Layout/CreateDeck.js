import React, { useState } from "react";
import CancelButton from "./Buttons/CancelButton";
import SubmitNewDeckButton from "./Buttons/SubmitNewDeckButton";
import BreadcrumbNav from "./Buttons/BreadcrumbNav";
import { useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";

function CreateDeck() {

const initialFormState={name:"",description:""};
const [formData, setFormData] = useState({ ...initialFormState });

const history=useHistory();

const handleChange = ({ target }) => {
    setFormData({
  ...formData,
  [target.name]: target.value
});
};

function handleFormSubmit (event) {
    event.preventDefault();
    createDeck(formData)
   
history.push("/")


}

  return (
    <div ><BreadcrumbNav/>
      <h1>Create Deck</h1>
      <div><label htmlFor="name" >Name</label>
          <input type="text" id="name" name="name" placeholder="Deck Name" style={{width: "100%"}} required={true}  onChange={handleChange} value={formData.name} 
              /></div>
      <div className="mt-3"><label htmlFor="description" >Description</label>
          <textarea id="description" name="description" placeholder="Brief description of the deck" rows={4} style={{width: "100%"}} required={true}  onChange={handleChange} value={formData.description} 
              /></div>
              <div className="row p-3"><CancelButton/><SubmitNewDeckButton handleFormSubmit={handleFormSubmit}/>
              </div>
              
      
    </div>
  );
}
//<div className="col col-2"><CancelButton/><SubmitNewDeckButton/></div><div className="col col-2"><SubmitNewDeckButton/></div><div className="col col-8 text-right">test3</div>
export default CreateDeck;
