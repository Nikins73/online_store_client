import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";

import { SHOP_ROUTE } from "../utils/consts";
const AppRouter = () => {
  const isAuth = useSelector((state) => state.user.isAuth);

  return (
    <Switch>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={SHOP_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
