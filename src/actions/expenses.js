import database from "../firebase/firebase";

//ADD_EXPENSE

const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense
});

const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt };

    return database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then(ref => {
        dispatch(addExpense({ id: ref.key, ...expense }));
      })
      .catch(() => {
        console.log("error");
      });
  };
};

//REMOVE_EXPENSE

const removeExpense = ({ id = 0 } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

const startRemoveExpense = ({ id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      })
      .catch(() => {
        console.log("error");
      });
  };
};
//EDIT_EXPENSE

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};
//SET EXPENSE
const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});

const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses`)
      .once("value")
      .then(snapshot => {
        let expenses = [];
        snapshot.forEach(child => {
          expenses.push({
            id: child.key,
            ...child.val()
          });
        });
        dispatch(setExpenses(expenses));
      })
      .catch(() => {
        console.log("error");
      });
  };
};

export {
  addExpense,
  startAddExpense,
  removeExpense,
  startRemoveExpense,
  editExpense,
  startEditExpense,
  setExpenses,
  startSetExpenses
};
