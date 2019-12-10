import React from "react";
import { shallow } from "enzyme";
import { Login } from "../../components/Login";

test("Renderiza Login", () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});

test("Inicia login al clickear botón.", () => {
  const startLogin = jest.fn();

  const wrapper = shallow(<Login startLogin={startLogin} />);
  wrapper.find("button").simulate("click");
  expect(startLogin).toHaveBeenCalled();
});
