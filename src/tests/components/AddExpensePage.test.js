import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from "../fixtures/expenses";

let addExpense, history, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage startAddExpense={addExpense} history={history} />
  );
});

test("Testea render de página de añadir gastos.", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Testea ennvío de formulario para añadir gasto.", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenCalledWith("/");
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});
