import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createType } from "../../http/deviceAPI";

const CreateType = ({ show, onHide }) => {
  const [value, setValue] = useState("");
  const addType = () => {
    console.log("ADD");
    createType({ name: value }).then(() => {
      setValue("");
      onHide();
    });
  };

  return (
    <Modal onHide={onHide} show={show} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder={"Введите название типа"}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button onClick={addType} variant="outline-success">
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
