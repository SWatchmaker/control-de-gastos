import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
    />
  );
});

test("Testea render de página de editar gastos.", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Testea ennvío de formulario para añadir gasto.", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenCalledWith("/");
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1]);
});

test("Testea ennvío de formulario para eliminar gasto.", () => {
  wrapper.find("button").prop("onClick")(expenses[2]);
  expect(history.push).toHaveBeenCalledWith("/");
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[2]);
});
