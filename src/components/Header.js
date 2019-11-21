import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Control de Gastos</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Añadir Gasto
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Ayuda
    </NavLink>
  </header>
);

export default Header;
