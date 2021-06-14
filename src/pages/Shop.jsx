import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceAPI";
import {
  setBrands,
  setDevices,
  setTotalCount,
  setTypes,
} from "../store/devicesReducer";
import Pages from "../components/Pages";

const Shop = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.devices.page);
  const selectedType = useSelector((state) => state.devices.selectedType);
  const selectedBrand = useSelector((state) => state.devices.selectedBrand);
  console.log(selectedBrand);
  useEffect(() => {
    fetchTypes().then((data) => dispatch(setTypes(data)));
    fetchBrands().then((data) => dispatch(setBrands(data)));
    fetchDevices().then((data) => {
      dispatch(setDevices(data.rows));
      dispatch(setTotalCount(data.count));
    });
  }, [dispatch]);

  useEffect(() => {
    fetchDevices(selectedType, selectedBrand, page, 2).then((data) => {
      dispatch(setDevices(data.rows));
      dispatch(setTotalCount(data.count));
    });
  }, [selectedBrand, selectedType, page]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
