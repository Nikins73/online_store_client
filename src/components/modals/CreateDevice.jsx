import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form, Row, Col } from "react-bootstrap";

import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { createDevice, fetchBrands, fetchTypes } from "../../http/deviceAPI";
import { setBrands, setTypes } from "../../store/devicesReducer";

const CreateDevice = ({ show, onHide }) => {
  const dispatch = useDispatch();

  const brands = useSelector((state) => state.devices.brands);
  const types = useSelector((state) => state.devices.types);
  const [info, setInfo] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    fetchTypes().then((data) => dispatch(setTypes(data)));
    fetchBrands().then((data) => dispatch(setBrands(data)));
  }, [dispatch]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("brandId", brand.id);
    formData.append("typeId", type.id);
    formData.append("info[]", info);
    // formData.append("info[]", JSON.stringify(info));

    createDevice(formData)
      .then((data) => {
        console.log(data);
        onHide();
      })
      .catch((e) => console.log(e));
  };

  // console.log(info);
  return (
    <Modal onHide={onHide} show={show} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новое устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{type.name || "Выберите тип"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {types.map((type) => (
                <Dropdown.Item onClick={() => setType(type)} key={type.id}>
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{brand.name || "Выберите бренд"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {brands.map((brand) => (
                <Dropdown.Item onClick={() => setBrand(brand)} key={brand.id}>
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Form.Control
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="mt-3"
            placeholder={"Введите название устройства"}
          />
          <Form.Control
            onChange={(e) => setPrice(Number(e.target.value))}
            value={price}
            className="mt-3"
            type="number"
            placeholder={"Введите стоимость устройства"}
          />
          <Form.Control
            onChange={selectFile}
            className="mt-3"
            type="file"
            placeholder={"Введите название устройства"}
          />
          <hr />
          <Button onClick={addInfo} variant="outline-dark">
            Добавить новую характеристику
          </Button>
          {info.map((i) => (
            <Row className="mt-2" key={i.number}>
              <Col md={4}>
                <Form.Control
                  onChange={(e) =>
                    changeInfo("title", e.target.value, i.number)
                  }
                  value={i.title}
                  placeholder={"Название характеристики"}
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  onChange={(e) =>
                    changeInfo("description", e.target.value, i.number)
                  }
                  value={i.description}
                  placeholder={"Описание характеристики"}
                />
              </Col>
              <Col md={4}>
                <Button
                  onClick={() => removeInfo(i.number)}
                  variant="outline-danger"
                >
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button onClick={addDevice} variant="outline-success">
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
