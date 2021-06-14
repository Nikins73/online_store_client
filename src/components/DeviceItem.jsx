import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import star from "../assets/star.png";
import { useHistory } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const { id, name, rating, img } = device;
  const history = useHistory();

  return (
    <Col
      md={3}
      className="mt-3"
      onClick={() => history.push(DEVICE_ROUTE + "/" + id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border="light">
        <Image
          width={150}
          height={150}
          src={process.env.REACT_APP_API_URL + img}
        />
        <div className="text-black-50 d-flex justify-content-between align-items-center mt-1">
          <div>Apple</div>
          <div className="d-flex align-items-center">
            <div>{rating}</div>
            <Image width={20} src={star} />
          </div>
        </div>
        <div>{name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
