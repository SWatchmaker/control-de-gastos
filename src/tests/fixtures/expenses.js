import moment from "moment";

export default [
  {
    id: "1",
    description: "Papa",
    note: "",
    amount: 123,
    createdAt: 0
  },
  {
    id: "2",
    description: "Tomate",
    note: "",
    amount: 321,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "Pago Visa",
    note: "Mes Agosto",
    amount: 15000,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];
