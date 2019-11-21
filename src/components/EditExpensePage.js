import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.editExpense(expense);
    this.props.history.push("/");
  };

  onClick = expense => {
    this.props.removeExpense(expense);
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
  editExpense: expense => {
    dispatch(editExpense(props.match.params.id, expense));
  },
  removeExpense: () => {
    dispatch(removeExpense({ id: props.match.params.id }));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
