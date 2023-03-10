import React, { useState,useEffect } from "react";
import CardForm from "./CardForm"
import { useParams } from "react-router-dom";
import { readCard } from "../utils/api";
function CardFormHolder({deck}){
const params=useParams();
    const [cardData,setCardData]=useState([]);
   


    useEffect(() => {
        readCard(params.cardId).then(data=>setCardData(data))
      },[])





  
    return (<div>{cardData.id&&<CardForm deckId={deck.id} cardData={cardData}/>}</div>)
}

export default CardFormHolder;