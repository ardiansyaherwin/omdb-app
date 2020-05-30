import React, { useState } from "react";
import { getMoviesRequest } from "../../stores/actions/movies";
import {
  Box,
  Container,
  LinearProgress,
  Paper,
  Typography,
  Grid,
} from '@material-ui/core';
import { SearchBar, MovieCard } from "../../components"

import { connect } from "react-redux";

function MoviesPage(props) {
  const [keyword, setKeyword] = useState(props.movies.keyword)

  const fetchMovies = (params) => {
    props.getMoviesRequest(params);
  };
  
  function handleSearchMovie( value ) {
    setKeyword(value);
    fetchMovies(value);
  }

  return (
    <Container>
      <Paper elevation={0} square>
        <div style={{ paddingTop: 74 }}>
          <SearchBar
            onSubmit={handleSearchMovie}
            minimumLength={3}
            placeholder="Search movies…"
            loading={props.movies.fetchingMovies}
            value={keyword}
          />
          {props.movies.fetchingMovies ? (
            <LinearProgress />
          ) : props.movies.data ? (
            <Grid container spacing={3} style={{ marginTop: 0 }}>
              {props.movies.data &&
                props.movies.data.map((movie) => {
                  return (
                    <Grid item xs={12} sm={4} key={movie.imdbID}>
                      <MovieCard
                        poster={movie.Poster}
                        title={movie.Title}
                        type={movie.Type}
                        year={movie.Year}
                        imdbId={movie.imdbID}
                        lightbox
                      />
                    </Grid>
                  );
                })}
            </Grid>
          ) : (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              css={{ height: 300 }}
            >
              <Box>
                <Typography variant="h3" align="center" color="textSecondary">
                  No Movies Found
                </Typography>
              </Box>
            </Box>
          )}
        </div>
      </Paper>
    </Container>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    movies: state.movies,
  };
};

export default connect(
  mapStateToProps,
  {
    getMoviesRequest,
  }
)(MoviesPage);