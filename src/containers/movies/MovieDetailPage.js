import React, {
  useEffect,
  useState,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Container,
  LinearProgress,
  Paper,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";

import { ArrowBackIos } from '@material-ui/icons';
import MoviesApi from "../../api/movies";

import { withStyles } from "@material-ui/core/styles";
import styles from './style-jss'

const moviesApi = MoviesApi();

const MovieDetailPage = (props) => {
  const { classes } = props
  const movieId = props.match.params.id;

  const [movieDetailState, setMovieDetailState] = useState({
    fetchingMovie: true,
    movieData: null,
  });
  
  const { fetchingMovie, movieData } = movieDetailState

  const fetchMovieDetail = useCallback(async () => {
    await moviesApi.getMovieDetail(movieId)
      .then(response => {
        setMovieDetailState({
          movieData: response,
          fetchingMovie: false
        })
      })
      .catch( error => error )
    
  }, [movieId]);

  useEffect(() => {
    fetchMovieDetail();
  }, [fetchMovieDetail]);


  return (
    <Container className={classes.root}>
      <div style={{ paddingTop: 84 }}>
        <AppBar position="fixed">
          <Container>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                component={Link}
                to="/"
              >
                <ArrowBackIos />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
        <Paper elevation={1} square styles={{ padding: 10 }}>
          {fetchingMovie ? (
            <LinearProgress />
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <Paper className={classes.columnPaper}>
                  <img
                    src={movieData.Poster}
                    alt={movieData.Title}
                    style={{ width: "100%" }}
                  />
                </Paper>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Paper
                  className={classes.columnPaper}
                  style={{ paddingLeft: 0 }}
                >
                  <Typography variant="overline" display="block">
                    IMDB ID
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    {movieData.imdbID}
                  </Typography>
                  <Divider />
                  <Typography variant="overline" display="block">
                    IMDB Rating
                  </Typography>
                  <Rating
                    name="size-small"
                    defaultValue={parseInt(movieData.imdbRating) / 2}
                    precision={0.5}
                    size="small"
                    readOnly
                  />
                  <Divider />
                  <Typography variant="overline" display="block">
                    IMDB Votes
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    {movieData.imdbVotes}
                  </Typography>
                  <Divider />
                  <Typography variant="overline" display="block">
                    Meta Score
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    {movieData.Metascore}
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper className={classes.columnPaper}>
                  <Typography variant="h4" gutterBottom>
                    {movieData.Title}
                  </Typography>
                  <Typography variant="h6" gutterBottom color="textSecondary">
                    ({movieData.Year}) | {movieData.Country}
                  </Typography>
                  <Typography variant="overline" display="block" gutterBottom>
                    {movieData.Type} | {movieData.Runtime} | {movieData.Genre} |{" "}
                    {movieData.Released}
                  </Typography>
                  <Typography
                    variant="body2"
                    gutterBottom
                    color="textSecondary"
                  >
                    {movieData.Plot}
                  </Typography>
                  <List dense style={{ padding: 0 }}>
                    <ListItem disableGutters>
                      <ListItemText
                        primary={"Directors"}
                        secondary={movieData.Director}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText
                        primary={"Writers"}
                        secondary={movieData.Writer}
                      />
                    </ListItem>
                    <ListItem disableGutters>
                      <ListItemText
                        primary={"Actors"}
                        secondary={movieData.Actors}
                      />
                    </ListItem>
                  </List>
                </Paper>
              </Grid>
            </Grid>
          )}
        </Paper>
      </div>
    </Container>
  );
};

MovieDetailPage.propTypes = {
  classes: PropTypes.object.isRequired,
  maxWidth: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};

MovieDetailPage.defaultProps = {
  maxWidth: "lg",
};
export default withStyles(styles)(MovieDetailPage);
