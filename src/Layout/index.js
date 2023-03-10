import React,{useState,useEffect} from "react";
import { Route, Switch, useRouteMatch,useLocation } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import CreateDeckButton from "./Buttons/CreateDeckButton"
import DeckList from "./DeckList";
import CreateDeck from "./CreateDeck";

import View from "./View";
import { listDecks } from "../utils/api";



function Layout() {
  const { url } = useRouteMatch(); 
  const [data,setData]=useState([])
const location=useLocation();
  
  useEffect(() => {
    listDecks().then(data=>setData(data))
  },[location])
  

    
    return  (
    <div>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path={url}><CreateDeckButton/>
        <DeckList data={data}/></Route>
<Route exact path={`${url}decks/new`}><CreateDeck /></Route>
<Route path={`${url}decks/:deckId`}><View /></Route>
          <Route><NotFound /></Route>
        </Switch>
      </div>
    </div>
  )
}
//data={data}
export default Layout;
