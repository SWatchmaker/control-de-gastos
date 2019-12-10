import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/Header";

test("Renderiza Header", () => {
  const wrapper = shallow(<Header startLogout={() => {}} />);
  expect(wrapper).toMatchSnapshot();
});

test("Inicia Logout al clickera botón", () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find("button").simulate("click");

  expect(startLogout).toHaveBeenCalled();
});
