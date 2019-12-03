const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(e => e.id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(e =>
        e.id === action.id ? { ...e, ...action.updates } : e
      );
    case "SET_EXPENSES":
      return action.expenses;
    default:
      return state;
  }
};

export default expensesReducer;
