import React, { useState, useRef } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import shortid from "shortid";

import "./modal.css";

// Modal to add a card
export default function CustomModal(props) {
  // States for controlled input
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  // Validator
  const [isValid, setIsValid] = useState({
    titleIsValid: false,
    descIsValid: false
  });
  // These are for feedback
  const titleInRef = useRef();
  const descInRef = useRef();

  function validateTitle(currTitle) {
    currTitle = currTitle.trim();
    if (currTitle.length > 0 && currTitle.length < 31) {
      setIsValid({ ...isValid, titleIsValid: true });
      titleInRef.current.style.display = "none";
    } else {
      setIsValid({ ...isValid, titleIsValid: false });
      titleInRef.current.style.display = "block";
    }
    setTitle(currTitle);
  }
  function validateDesc(currDesc) {
    currDesc = currDesc.trim();
    if (currDesc.length > 0 && currDesc.length < 151) {
      setIsValid({ ...isValid, descIsValid: true });
      descInRef.current.style.display = "none";
    } else {
      setIsValid({ ...isValid, descIsValid: false });
      descInRef.current.style.display = "block";
    }
    setDesc(currDesc);
  }

  function closeModal() {
    props.onHide();
    setTitle("");
    setDesc("");
  }

  function handleSave() {
    // if everything is valid, create the card
    if (isValid.descIsValid && isValid.titleIsValid) {
      props.setCards(cards => {
        return [
          ...cards,
          {
            cardId: shortid.generate(),
            title: title,
            description: desc
          }
        ];
      });
    }
    closeModal();
  }

  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">New Card</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              value={title}
              onChange={e => validateTitle(e.target.value)}
            />
            <p id="title-input" ref={titleInRef}>
              The title should be 1 - 30 characters.
            </p>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              required
              type="text"
              value={desc}
              onChange={e => validateDesc(e.target.value)}
            />
            <p id="desc-input" ref={descInRef}>
              The description should be 1 - 150 characters.
            </p>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={handleSave}
          disabled={!(isValid.titleIsValid && isValid.descIsValid)}
        >
          Save
        </Button>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
