import React,{useState} from "react";
import {listDecks} from "../utils/api/index";
import Deck from "./Deck";

function DeckList({data}) {

  return (
    <div className="border rounded">
          {data.map((deck,index)=>{return <Deck deck={deck} data={data} key={index}/>})}
    </div>
  );
}

export default DeckList;
