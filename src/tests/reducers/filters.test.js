import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("Setea valores por defector para el reducer.", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("Setea acción de ordenar por date en el reducer.", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("Setea acción de ordenar por monto en el reducer.", () => {
  const state = filtersReducer(
    {
      text: "",
      sortBy: "amount",
      startDate: moment().startOf("month"),
      endDate: moment().endOf("month")
    },
    { type: "SORT_BY_DATE" }
  );
  expect(state.sortBy).toBe("date");
});

test("Setea acción de filtrar por texto en el reducer.", () => {
  const state = filtersReducer(undefined, {
    type: "SET_TEXT_FILTER",
    text: "testing"
  });
  expect(state.text).toBe("testing");
});

test("Setea acción de filtrar por fecha inicio en el reducer", () => {
  const state = filtersReducer(undefined, {
    type: "SET_START_DATE",
    date: 123456
  });
  expect(state.startDate).toBe(123456);
});

test("Setea acción de filtrar por fecha término en el reducer", () => {
  const state = filtersReducer(undefined, {
    type: "SET_END_DATE",
    date: 654321
  });
  expect(state.endDate).toBe(654321);
});
