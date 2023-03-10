import React from "react";
import { Link, Switch, Route, useParams, useLocation } from "react-router-dom";

function BreadcrumbNav({ deck }) {
   const params = useParams()
  const location = useLocation();



  let cardId = "";
  let locationPath = location.pathname.split("/")
  if (location.pathname.split("/").length === 6) { cardId = locationPath[4] }


  if (location.pathname === "/decks/new") {
    return (<nav><ol className="breadcrumb">
      <li className="breadcrumb-item" ><Link to="/">Home</Link></li><li className="breadcrumb-item active" aria-current="page">Create Deck</li></ol> </nav>)
  }

  if (location.pathname === `/decks/${params.deckId}/cards/new`) { return (<nav><ol className="breadcrumb"><li className="breadcrumb-item" ><Link to="/">Home</Link></li><li className="breadcrumb-item" ><Link to={`/decks/${params.deckId}`}>{deck.name}</Link></li><li className="breadcrumb-item active" aria-current="page">Add Card</li></ol></nav>) }


  return (<nav>
    <ol className="breadcrumb">
      <li className="breadcrumb-item" ><Link to="/">Home</Link></li>
      <Switch>
        <Route path={`/decks/${params.deckId}/edit`}><li className="breadcrumb-item active" ><Link to={`/decks/${params.deckId}`}>{deck.name}</Link></li><li className="breadcrumb-item active" aria-current="page">Edit Deck</li></Route>

        <Route path={`/decks/${params.deckId}/study`}><li className="breadcrumb-item" ><Link to={`/decks/${params.deckId}`}>{deck.name}</Link></li><li className="breadcrumb-item active" aria-current="page">Study</li></Route>

        {/* replacement*/}
        <Route path={`/decks/${params.deckId}/cards/`}>
          <li className="breadcrumb-item" ><Link to={`/decks/${params.deckId}`}>Deck {deck.name}</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Edit Card {cardId}</li>
        </Route>

        <Route path={`/decks/${params.deckId}`}><li className="breadcrumb-item active" aria-current="page">{deck.name}</li></Route>
      </Switch>

    </ol>
  </nav>)

}

export default BreadcrumbNav;