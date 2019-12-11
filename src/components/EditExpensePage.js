import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.startEditExpense(expense);
    this.props.history.push("/");
  };

  onClick = expense => {
    this.props.startRemoveExpense(expense);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Editar Gasto</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
          <button className="button button--secondary" onClick={this.onClick}>
            Borrar Gasto
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: expense => {
    dispatch(startEditExpense(props.match.params.id, expense));
  },
  startRemoveExpense: () => {
    dispatch(startRemoveExpense({ id: props.match.params.id }));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
