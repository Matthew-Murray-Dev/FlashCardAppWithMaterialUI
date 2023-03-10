import React,{useState} from "react";
import FlipButton from "./Buttons/FlipButton";
import NextButton from "./Buttons/NextButton";



function StudySheet({deck}){
const [count,setCount]=useState(0);
const [flip,setFlip]=useState(false);



return (<div  className="border p-3 ">
<div className="row ">
    <div className="col"><h4>Card {count+1} of {deck.cards.length}</h4></div></div>
<p>{!flip ? deck.cards[count].front : deck.cards[count].back}</p> <div className="row pl-3"><FlipButton flip={flip} setFlip={setFlip}/>{flip ? <NextButton length={deck.cards.length} count={count}setCount={setCount} flip={flip} setFlip={setFlip}/>:""}<div className="row pl-3"></div>
              </div>


</div>)

}
//
export default StudySheet;