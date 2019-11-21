import React from "react";
import { NavLink } from "react-router-dom";

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div>
    <NavLink to={"/edit/" + id}>{description}</NavLink>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

export default ExpenseListItem;
