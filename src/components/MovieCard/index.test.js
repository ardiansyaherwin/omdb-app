import React from "react";
import { shallow, mount } from "enzyme";
import { MemoryRouter, Link } from "react-router-dom";
import MovieCard from "./index";
import LightBox from "../LightBox"
import { CardActionArea } from "@material-ui/core";
import { unwrap } from "@material-ui/core/test-utils";

const MovieCardNaked = unwrap(MovieCard)
const requiredProps = {
  classes: {},
  poster: 'http://image.com/image.jpg',
  title: 'Movie Title',
  type: 'Movie',
  year: '2020',
  imdbId: '1234',
};

const defaultProps = {
  lightbox: false,
  fullPoster: null,
};


describe('<SearchBar />', () => {
  it("should render as expected", () => {
    const wrapper = shallow(<MovieCard {...requiredProps} {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should have props:poster value which suffixed by .jpg, .jpeg or .png", () => {
    const isValidImage = requiredProps.poster.match(/\.(jpeg|jpg|)$/) != null;
    expect(isValidImage).toBeTruthy();
  });

  it("should render a link button with props:to equal to /movies/:imdbId", () => {
    const wrapper = mount(
      <MemoryRouter>
        <MovieCard {...requiredProps} {...defaultProps} />
      </MemoryRouter>
    );
    expect(wrapper.find(Link).props().to).toBe(`/movies/${requiredProps.imdbId}`)
  });

  it("should render <CardActionArea /> if props:lightbox is set to TRUE", () => {
    const wrapper = shallow(<MovieCardNaked {...requiredProps} lightbox />);
    expect(wrapper.find(CardActionArea).exists()).toBeTruthy();
  })

  it("should render <LightBox /> if props:lightbox is set to TRUE", () => {
    const wrapper = shallow(<MovieCardNaked {...requiredProps} lightbox />);
    expect(wrapper.find(LightBox).exists()).toBeTruthy();
  });

  it("should set <LightBox /> props:showDialog to TRUE upon clicking on <CardActionArea />", () => {
    const wrapper = shallow(<MovieCardNaked {...requiredProps} lightbox />)
    wrapper
      .find(CardActionArea)
      .simulate("click")
    
    wrapper.update()
    expect(wrapper.find(LightBox).props().showDialog).toBe(true)
  });
})
