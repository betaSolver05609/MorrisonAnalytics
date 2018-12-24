import React from "react";
import { configure, shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavBar from "./NavBar";
import Search from "../Search/Search";
configure({ adapter: new Adapter() });

//Should be rendered once it is shallow rendered
describe("<NavBar />", () => {
  it("NavBar should be able to render", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.exists("NavBar"));
  });
});

describe("<Search />", () => {
  it("When NavBar is rendered Search should also be rendered", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.find(Search).exists()).toEqual(true);
  });
});
