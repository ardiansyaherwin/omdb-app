import React from 'react'
import { shallow, mount } from 'enzyme'
import SearchBar from './index'
import {
  InputBase,
  CircularProgress,
  IconButton,
  FormHelperText,
} from "@material-ui/core"
import { unwrap } from "@material-ui/core/test-utils"

const SearchBarNaked = unwrap(SearchBar)


const defaultProps = {
  loading: false,
  minimumLength: 1,
  placeholder: "Search here...",
  value: "",
}

const requiredProps = {
  classes: {},
  onSubmit: jest.fn()
}

describe('<SearchBar />', () => {
  
  it("should render as expected", () => {
    const wrapper = shallow(<SearchBar {...requiredProps} {...defaultProps} />)
    expect(wrapper).toMatchSnapshot()
})

  it("should render <CircularProgress /> if defaultProps:loading is TRUE", () => {
    const wrapper = shallow(
      <SearchBarNaked {...requiredProps} {...defaultProps} loading={true} />
    )
    expect(wrapper.find(CircularProgress).exists()).toBeTruthy()
  })

  it("should render close <IconButton /> if props:value.length more than or equal to props:minimumLength", () => {
    const wrapper = shallow(
      <SearchBarNaked
        {...requiredProps}
        value={"abcd"}
        minimumLength={3}
      />
    )
    expect(wrapper.find(IconButton).exists()).toBeTruthy()
  })

  it("should render <FormHelperText /> if props:value.length less than or equal to props:minimumLength", () => {
    const wrapper = shallow(
      <SearchBarNaked
        {...requiredProps}
        value={"ab"}
        minimumLength={3}
      />
    )
    expect(wrapper.find(FormHelperText).exists()).toBeTruthy()
  })

  it("expect to call props:onSubmit if props:minimumLength is less than or equal to props:value", () => {
    const wrapper = mount(
      <SearchBarNaked {...requiredProps} minimumLength={1} value={"ab"} />
    )
    wrapper
      .find(InputBase)
      .at(0)
      .find("input")
      .simulate("keyDown", { keyCode: 13 })

    wrapper.update()
    expect(requiredProps.onSubmit).toHaveBeenCalledTimes(1)
  })
})