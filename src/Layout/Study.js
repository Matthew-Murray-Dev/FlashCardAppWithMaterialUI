import React from "react";
import AddCardButton from "./Buttons/AddCardButton";
import StudySheet from "./StudySheet";

function Study({deck}) {

if (deck.cards&&deck.cards.length<3){return (
  <div>
    <h1>{deck.name}: Study</h1>
    <h3>Not enough cards.</h3><p>You need at least 3 cards to study. there are {deck.cards.length} cards in this deck.</p>
    <AddCardButton id={deck.id}/>
  </div>
);} else {return <div><h1>{deck.name}: Study</h1>{deck.cards&&<StudySheet deck={deck}/>}</div>}
  
}
//{deck.cards.length < 3 ? <div><AddCardButton/></div> : ""}
export default Study;
