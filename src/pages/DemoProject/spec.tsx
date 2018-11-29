import "jest";
import * as React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DemoProject from ".";

configure({ adapter: new Adapter() });

describe("<DemoProject />", () => {
  it("renders without crashing", () => {
    shallow(<DemoProject />);
  });
})
