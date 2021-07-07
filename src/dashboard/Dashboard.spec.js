// Test away
import { render } from "@testing-library/React";
import Dashboard from "./Dashboard";
import { renderer } from "react-test-renderer";

describe("<Dashboard/>", () => {
  it("it should match snapshot", () => {
    const tree = renderer.create(<Dashboard />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
