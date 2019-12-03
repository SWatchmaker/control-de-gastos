import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("Setea state default", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("Borra gasto por ID.", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("Devuelve array completo al no encontrar ID para borrar.", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "4"
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("Añade gasto", () => {
  const newExpense = {
    id: 4,
    description: "Bebidas",
    note: "",
    amount: 5000,
    createdAt: -1000
  };

  const action = {
    type: "ADD_EXPENSE",
    expense: newExpense
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});

test("Edita un gasto en base al ID.", () => {
  const updates = {
    description: "Tomate Feria",
    amount: 3500
  };

  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    expenses[0],
    { ...expenses[1], ...updates },
    expenses[2]
  ]);
});

test("Edita un gasto en base al ID inexistente, devuelve array original.", () => {
  const updates = {
    description: "Tomate Feria",
    amount: 3500
  };

  const action = {
    type: "EDIT_EXPENSE",
    id: "4",
    updates
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("Establece gastos", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[1]]
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
