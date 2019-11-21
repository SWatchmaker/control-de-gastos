import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../../actions/filters";
import moment from "moment";

test("Establece fecha de inicio en filtros.", () => {
  const time = moment();

  const action = setStartDate(time);
  expect(action).toEqual({
    type: "SET_START_DATE",
    date: time
  });
});

test("Establece fecha de término en filtros.", () => {
  const time = moment();

  const action = setEndDate(time);
  expect(action).toEqual({
    type: "SET_END_DATE",
    date: time
  });
});

test("Establece el filtro de texto CON texto ingresado", () => {
  const action = setTextFilter("TEST");
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "TEST"
  });
});

test("Establece el filtro de texto SIN texto ingresado", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("Establece orden por fecha.", () => {
  expect(sortByDate()).toEqual({
    type: "SORT_BY_DATE"
  });
});

test("Establece orden por monto.", () => {
  expect(sortByAmount()).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});
