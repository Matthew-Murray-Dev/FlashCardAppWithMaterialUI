import React,{useState,useEffect} from "react";
import { useParams,Switch,Route,useRouteMatch,useLocation } from "react-router-dom";
import { readDeck } from "../utils/api";
import StudyDeckButton from "./Buttons/StudyDeckButton";
import DeleteDeckButton from "./Buttons/DeleteDeckButton";
import AddCardButton from "./Buttons/AddCardButton";
import EditDeckButton from "./Buttons/EditDeckButton";
import CardList from "./CardList";
import BreadcrumbNav from "./Buttons/BreadcrumbNav";
import Study from "./Study";
import EditDeck from "./EditDeck"
import CardForm from "./CardForm"
import CardFormHolder from "./CardFormHolder";


function View() {
  const location=useLocation();
    const params = useParams();
    const [deck,setDeck]=useState([]);
    const { url } = useRouteMatch();

    useEffect(() => {
      readDeck(params.deckId).then(data=>setDeck(data))
    },[location])

  return (
    <div>{<BreadcrumbNav deck={deck}/>}<Switch>
    <Route exact path={url}><h4>{deck.name}</h4>
      {deck.description}
      
      <div className="row pl-3 mt-2 justify-content-between"><div className="row pl-3"><EditDeckButton deck={deck}/><StudyDeckButton deck={deck}/><AddCardButton id={deck.id}/></div><div className="" ><DeleteDeckButton deck={deck}/></div >
      <div className="col-12 pl-0 mt-4"><h3>Cards</h3></div>
      <div className="w-100">{deck.cards&&<CardList deck={deck}/>}</div>

              </div></Route>
              <Route path={`${url}/study`}><Study deck={deck}/></Route>
<Route path={`${url}/edit`}>{deck.name&&<EditDeck deck={deck}/>}</Route>
<Route exact path={`${url}/cards/:cardId/edit`}><CardFormHolder deck={deck}/></Route>
<Route exact path={`${url}/cards/new`}><CardForm deckId={deck.id}/></Route></Switch>
    </div>
  );
}

export default View;
