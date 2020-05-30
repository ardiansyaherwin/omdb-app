import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Container,
  Toolbar,
  InputBase,
  FormHelperText,
  CircularProgress,
  IconButton,
} from "@material-ui/core";
import { Search, Clear } from "@material-ui/icons";
import styles from "./SearchBar-jss";

const SearchBar = (props) => {
  const { classes, onSubmit, minimumLength, loading, placeholder, value } = props;
  const [searchBarState, setSearchBarState] = useState({
    error: false,
    value: value,
  });

  function handleKeyPress(e, onSubmit) {
    const value = e.target.value;
    const error = value.length < minimumLength;

    if (e.keyCode === 13 && value.length >= minimumLength) onSubmit(value);

    setSearchBarState({ value, error });
  }

  function handleInputChange(e) {
    const value = e.target.value;
    const error = value.length < minimumLength;
    setSearchBarState({ value, error });
  }

  function handleClear() {
    onSubmit("");
    setSearchBarState({ value: "" });
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Container maxWidth="sm">
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder={placeholder}
                autoFocus
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{
                  "aria-label": "search",
                  disabled: loading,
                }}
                value={searchBarState.value}
                onChange={handleInputChange}
                onKeyDown={(e) => handleKeyPress(e, onSubmit)}
              />
              {searchBarState.value.length >= minimumLength ? (
                <IconButton
                  aria-label="clear"
                  size="small"
                  className={classes.clearIcon}
                  color="inherit"
                  onClick={handleClear}
                >
                  <Clear />
                </IconButton>
              ) : (
                ""
              )}
              {loading && (
                <CircularProgress
                  className={classes.progress}
                  size={30}
                  color="inherit"
                />
              )}
              {minimumLength && searchBarState.error && (
                <FormHelperText className={classes.helperText}>
                  Minimum {minimumLength} character(s)
                </FormHelperText>
              )}
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

SearchBar.propTypes = {
  classes: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  minimumLength: PropTypes.number,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

SearchBar.defaultProps = {
  onSubmit: () => {},
  loading: false,
  minimumLength: 1,
  placeholder: "Search here...",
  value: ''
};

export default withStyles(styles)(SearchBar);
