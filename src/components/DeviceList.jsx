import React from "react";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import DeviceItem from "./DeviceItem";

const DeviceList = () => {
  const deviceList = useSelector((state) => state.devices.deviceList);

  return (
    <Row>
      {deviceList.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
};
export default DeviceList;
