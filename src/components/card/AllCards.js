import React from "react";

import Card from "./Card";
import "./card.css";

// A component to house all the cards
export default function AllCards({ cards }) {
  return (
    <div className="card-sidebar">
      {cards.map(card => {
        return (
          <Card
            key={card.cardId}
            cardId={card.cardId}
            title={card.title}
            description={card.description}
          />
        );
      })}
    </div>
  );
}
