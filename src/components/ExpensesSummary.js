import React from "react";
import { Link } from "react-router-dom";
import getExpensesTotal from "../selectors/expenses-total";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import numeral from "numeral";

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => (
  <div className="page-header">
    <div className="content-container">
      <h1 className="page-header__title">
        N° Gastos: <span>{expensesCount}</span> | Total Gastos:
        <span>{numeral(expensesTotal / 100).format("$0,0.00")}</span>
      </h1>
      <div className="page-header__actions">
        <Link className="button" to="/create">
          Añadir Gasto
        </Link>
      </div>
    </div>
  </div>
);

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: getExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
