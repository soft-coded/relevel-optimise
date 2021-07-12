import React, { useState } from "react";
import { Button } from "react-bootstrap";

import "./header.css";
import logo from "../../assets/relevel.jpeg";
import Modal from "../modal/Modal";

export default function Header({ setCards }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="page-header">
      <div className="logo">
        <img src={logo} alt="Relevel" />
        {/* Color for the text was not mentioned so I used the one in the example */}
        <h3>Relevel Trello</h3>
      </div>
      {/* Button to add card that opens the modal */}
      <Button
        variant="primary"
        className="add-btn"
        onClick={() => setShowModal(true)}
      >
        Add Card
      </Button>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        setCards={setCards}
      />
    </header>
  );
}
