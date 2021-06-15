import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { setIsAuth, setUser } from "../store/userReducer";

const NavBar = () => {
  const isAuth = useSelector((state) => state.user.isAuth);

  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch(setUser(null));
    dispatch(setIsAuth(false));
    localStorage.removeItem("token");
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to={SHOP_ROUTE}>ВСЕ ПО 3</NavLink>
        {isAuth ? (
          <Nav className="ml-auto">
            <Button
              onClick={() => history.push(ADMIN_ROUTE)}
              variant={"outline-light"}
            >
              Админ панель
            </Button>
            <Button
              onClick={() => logout()}
              variant={"outline-light"}
              className="ml-2"
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant={"outline-light"}
              onClick={() => {
                history.push(LOGIN_ROUTE);
              }}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
