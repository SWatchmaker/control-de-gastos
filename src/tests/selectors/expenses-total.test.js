import getExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("Devuelve 0 si no existen gastos.", () => {
  const total = getExpensesTotal([]);
  expect(total).toBe(0);
});

test("Devuelve el total de un solo gasto.", () => {
  const total = getExpensesTotal([expenses[0]]);
  expect(total).toBe(expenses[0].amount);
});

test("Devuelve el total de múltiples gastos", () => {
  const total = getExpensesTotal(expenses);
  expect(total).toBe(15444);
});
