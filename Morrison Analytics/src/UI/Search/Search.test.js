import React from "react";
import { configure, shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Search from "./Search";
import NavBar from "../NavBar/NavBar";
configure({ adapter: new Adapter() });

describe("<Search>", () => {
  it("Should be rendered along with the Navbar", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.exists("Search")).toBe(true);
  });
});
