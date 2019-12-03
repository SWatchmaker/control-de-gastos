import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, startRemoveExpense } from "../actions/expenses";

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
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onClick}>Borrar</button>
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
