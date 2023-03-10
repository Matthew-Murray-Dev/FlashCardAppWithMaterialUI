import React from "react";
import Card from "./Card"

function CardList({deck}){
   
    return (
    <div className="border rounded ">
          {deck.cards.map((card,index)=>{return <Card card={card} key={index}/>})}
          </div>
          )
        }
//{deck.cards.map((card,index)=>{return <Card card={card} deck={deck} key={index}/>})}
export default CardList;