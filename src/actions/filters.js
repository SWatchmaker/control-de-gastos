//SET_TEXT_FILTER

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

//SORT_BY_AMOUNT

const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

//SORT_BY_DATE

const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

//SET_START_DATE

const setStartDate = (date = undefined) => ({
  type: "SET_START_DATE",
  date
});

//SET_END_DATE

const setEndDate = (date = undefined) => ({
  type: "SET_END_DATE",
  date
});

export { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate };
