import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { setSelectedBrand } from "../store/devicesReducer";

const BrandBar = () => {
  const brands = useSelector((state) => state.devices.brands);
  const selectedBrand = useSelector((state) => state.devices.selectedBrand);
  const dispatch = useDispatch();

  return (
    <Row>
      {brands.map(({ id, name }) => (
        <Card
          className="p-3"
          style={{ cursor: "pointer" }}
          key={id}
          border={id === selectedBrand ? "primary" : "light"}
          onClick={() => dispatch(setSelectedBrand(id))}
        >
          {name}
        </Card>
      ))}
    </Row>
  );
};

export default BrandBar;
