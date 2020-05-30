import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom"
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { LightBox } from "../index";

import styles from "./MovieCard-jss";

const MovieCard = (props) => {
  const { 
    poster,
    title,
    type,
    year,
    imdbId,
    classes,
    fullPoster,
    lightbox
  } = props;
  
  const [openLightbox, setOpenLightbox] = useState(false);
  
  const MovieImageCard = () => {
    return <CardMedia image={poster} title={title} style={{ minHeight: 300 }} />
  }

  return (
    <Card className={classes.root}>
      {lightbox ? (
        <>
          <CardActionArea
            onClick={() => setOpenLightbox(true)}
          >
            <MovieImageCard />
          </CardActionArea>
          <LightBox
              source={fullPoster ? fullPoster : poster}
              showDialog={openLightbox}
              onClose={() => setOpenLightbox(false)}
            />
          </>
      ) : (
        <MovieImageCard />
      )}

      <CardContent>
        <Typography color="textSecondary">{type}</Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography color="textSecondary">{year}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          component={Link}
          to={`/movies/${imdbId}`}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

MovieCard.propTypes = {
  classes: PropTypes.object.isRequired,
  lightbox: PropTypes.bool,
  poster: PropTypes.string.isRequired,
  fullPoster: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  imdbId: PropTypes.string.isRequired,
};

MovieCard.defaultProps = {
  lightbox: false,
  fullPoster: null,
};


export default withStyles(styles)(MovieCard);
