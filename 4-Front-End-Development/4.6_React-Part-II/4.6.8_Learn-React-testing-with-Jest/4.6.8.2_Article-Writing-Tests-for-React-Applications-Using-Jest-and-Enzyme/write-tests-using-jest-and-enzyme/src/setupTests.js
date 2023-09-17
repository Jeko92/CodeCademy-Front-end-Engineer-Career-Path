import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-18";
configure({ adapter: new Adapter() });

/*
it("renders correctly", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
*/
