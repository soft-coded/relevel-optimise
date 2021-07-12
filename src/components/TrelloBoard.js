import React, { useState } from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Header from "./header/Header";
import AllCards from "./card/AllCards";

// I am only going to use Hooks and Functional Components.
function TrelloBoard() {
  const [cards, setCards] = useState([]);

  return (
    <>
      {/* Header component */}
      <Header setCards={setCards} />
      {/* Cards */}
      <AllCards cards={cards} />
    </>
  );
}

export default TrelloBoard;
