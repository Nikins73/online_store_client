import React, { useEffect, useState } from "react";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import { check } from "./http/userAPI";
import { setIsAuth, setUser } from "./store/userReducer";
import { useDispatch } from "react-redux";
import { Spinner } from "react-bootstrap";

function App() {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    check()
      .then((data) => {
        setUser(data);
        dispatch(setIsAuth(true));
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (isLoading) {
    return <Spinner animation={"grow"} />;
  }
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
