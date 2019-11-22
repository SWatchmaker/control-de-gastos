import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import expenses from "../fixtures/expenses";

test("Renderiza resumen de gasto con 1 gasto.", () => {
  const wrapper = shallow(
    <ExpensesSummary expensesCount={1} expensesTotal={200} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("Renderiza resumen de gasto con múltiples gastos.", () => {
  const wrapper = shallow(
    <ExpensesSummary expensesCount={21} expensesTotal={456700} />
  );
  expect(wrapper).toMatchSnapshot();
});
