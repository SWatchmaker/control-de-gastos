import React from "react";
import getExpensesTotal from "../selectors/expenses-total";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import numeral from "numeral";

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => (
  <div>
    <h1>
      N° Gastos: {expensesCount} | Total Gastos:
      {numeral(expensesTotal / 100).format("$0,0.00")}
    </h1>
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
