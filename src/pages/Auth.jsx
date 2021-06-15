import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { setIsAuth, setUser } from "../store/userReducer";
import { useDispatch } from "react-redux";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const click = async (e) => {
    e.preventDefault();
    try {
      let user;
      if (isLogin) {
        user = await login(email, password);
      } else {
        user = await registration(email, password);
      }
      dispatch(setUser(user));
      dispatch(setIsAuth(true));
      history.push(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <Container
      // style={{ width: "600" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Card className="p-5 m-3">
        <h2 className="m-auto pb-4">
          {isLogin ? "Авторизация" : "Регистрация"}
        </h2>
        <Form className="d-flex flex-column">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Адресс электронной почты</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              className="mt-3"
              type="email"
              placeholder="Введите адрес почты..."
              value={email}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              className="mt-3"
              type="password"
              placeholder="Введите пароль..."
              value={password}
            />
          </Form.Group>
          <Row className="d-flex justify-content-between mt-3">
            {isLogin ? (
              <div>
                <div>Нет аккаунта?</div>
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
              </div>
            ) : (
              <div>
                <div>Есть аккаунт?</div>
                <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
              </div>
            )}
            <Button onClick={click} variant="outline-primary" type="submit">
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
