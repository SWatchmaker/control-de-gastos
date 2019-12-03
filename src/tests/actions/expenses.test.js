import {
  startAddExpense,
  addExpense,
  removeExpense,
  editExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from "../../firebase/firebase";

const createMockStore = configureMockStore([thunk]);

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
  const action = addExpense(expenses[0]);

  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[0]
  });
});

test("Añade gasto a BD y store.", done => {
  const store = createMockStore({});
  const expenseData = {
    description: "Papa",
    amount: 3000,
    note: "5 kilosde papa",
    createdAt: 1000
  };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          ...expenseData,
          id: expect.any(String)
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("Setea acción de añadir gasto con datos por defecto.", done => {
  const store = createMockStore({});
  const expenseDefault = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  };

  store
    .dispatch(startAddExpense())
    .then(() => {
      const actions = store.getActions();

      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          ...expenseDefault,
          id: expect.any(String)
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseDefault);
      done();
    });
});
