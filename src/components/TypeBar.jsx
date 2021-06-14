import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import { setSelectedType } from "../store/devicesReducer";

const TypeBar = () => {
  const types = useSelector((state) => state.devices.types);
  const selectedType = useSelector((state) => state.devices.selectedType);
  const dispatch = useDispatch();

  return (
    <ListGroup>
      {types.map(({ id, name }) => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          key={id}
          active={id === selectedType}
          onClick={() => dispatch(setSelectedType(id))}
        >
          {name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TypeBar;
