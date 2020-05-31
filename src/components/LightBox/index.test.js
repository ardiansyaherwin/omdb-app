import React from "react"
import { shallow } from "enzyme"
import LightBox from "./index"
import {
  InputBase,
  CircularProgress,
  IconButton,
  FormHelperText,
} from "@material-ui/core"
import { unwrap } from "@material-ui/core/test-utils"

const LightBoxNaked = unwrap(LightBox)

const requiredProps = {
  source: "http://image.com/image.jpg",
  showDialog: false,
  onClose: jest.fn(),
  classes: {}
}

describe("<LightBox />", () => {

  it("should render as expected", () => {
    const wrapper = shallow(<LightBoxNaked {...requiredProps} />);
    expect(wrapper).toMatchSnapshot()
  })

  it("should have props:poster value which suffixed by .jpg, .jpeg or .png", () => {
    const isValidImage = requiredProps.source.match(/\.(jpeg|jpg|)$/) != null;
    expect(isValidImage).toBeTruthy();
  });

  it("expect to call props:onClose if <IconButton /> is clicked", () => {
    const wrapper = shallow(<LightBoxNaked {...requiredProps} />)
    wrapper
      .find(IconButton)
      .simulate("click")

    wrapper.update()
    expect(requiredProps.onClose).toHaveBeenCalledTimes(1)
  })

})
