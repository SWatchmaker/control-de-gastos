import React from "react";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";

export const Header = ({ startLogout }) => (
  <header>
    <h1>Control de Gastos</h1>
    <NavLink to="/dashboard" activeClassName="is-active">
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Añadir Gasto
    </NavLink>
    <button onClick={startLogout}>Cerrar Sesión</button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
