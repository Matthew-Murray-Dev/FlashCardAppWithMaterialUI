import React from "react";
import DeleteCardButton from "./Buttons/DeleteCardButton";
import EditCardButton from "./Buttons/EditCardButton";

function Card({card}){
    
    return (<div className="border col pt-3">
        <div className="row">
            <div className="col">{card.front}</div>
            <div className="col">{card.back}</div>
            </div>
            <div className="row p-3 justify-content-end"><EditCardButton id={card.id}/><DeleteCardButton id={card.id}/>
           </div>
    
    </div>)
    
    
    }

export default Card;

