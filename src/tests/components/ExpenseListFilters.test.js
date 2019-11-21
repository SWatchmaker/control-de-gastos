import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("Renderiza Filtro de gastos correctamente.", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Renderiza Filtro de gastos correctamente, con filtros alternativos.", () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test("Setea cambio en filtro de texto.", () => {
  wrapper.find("input").simulate("change", {
    target: {
      value: "papa"
    }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith("papa");
});

test("Setea orden por fecha", () => {
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find("select").simulate("change", {
    target: { value: "date" }
  });
  expect(sortByDate).toHaveBeenCalled();
});

test("Setea orden por monto", () => {
  wrapper.setProps({
    filters: filters
  });
  wrapper.find("select").simulate("change", {
    target: { value: "amount" }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test("Setea cambio de fecha.", () => {
  const startDate = moment(0).add(4, "years");
  const endDate = moment(0).add(8, "years");
  wrapper.find("DateRangePicker").prop("onDatesChange")({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("Maneja el cambio de foco en el selector de fecha.", () => {
  const calendarFocus = "endDate";
  wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocus);
  expect(wrapper.state("calendarFocused")).toBe(calendarFocus);
});
