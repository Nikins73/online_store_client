import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateDevice from "../components/modals/CreateDevice";

const AdminPage = () => {
  const [brandVisible, setbrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button
        onClick={() => setTypeVisible(true)}
        variant="outline-secondary"
        className="mt-3 p-2"
      >
        Добавить тип
      </Button>
      <Button
        onClick={() => setbrandVisible(true)}
        variant="outline-secondary"
        className="mt-3 p-2"
      >
        Добавить бренд
      </Button>
      <Button
        onClick={() => setDeviceVisible(true)}
        variant="outline-secondary"
        className="mt-3 p-2"
      >
        {" "}
        Добавить устройство
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setbrandVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
    </Container>
  );
};

export default AdminPage;
