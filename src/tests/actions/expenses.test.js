import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("Setea la acción de eliminar gasto.", () => {
  const action = removeExpense({ id: "123abc" });

  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("Setea la acción de editar gasto.", () => {
  const action = editExpense("123abc", {
    description: "Cuenta Gas",
    amount: 15000,
    createdAt: 123456789,
    note: "Nota Test"
  });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      description: "Cuenta Gas",
      amount: 15000,
      createdAt: 123456789,
      note: "Nota Test"
    }
  });
});

test("Setea acción de añadir gasto con datos ingresados.", () => {
  const expenseData = {
    description: "TEST",
    amount: 15000,
    createdAt: 123456789,
    note: "Nota de testeo."
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("Setea acción de añadir gasto con datos por defecto.", () => {
  const action = addExpense();

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});
