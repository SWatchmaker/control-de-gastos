export default expenses => {
  return expenses.reduce((acum, expense) => acum + expense.amount, 0);
};
