import { fade } from "@material-ui/core/styles";
const styles = (theme) => ({
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  helperText: {
    fontSize: "8px",
    fontWeight: "100",
    color: "white",
    position: "absolute",
    bottom: -14,
    opacity: 0.7,
    letterSpacing: ".75px",
    marginTop: 0,
  },
  progress: {
    position: "absolute",
    top: 2,
    right: 2,
    opacity: 0.7,
  },
  clearIcon: {
    position: "absolute",
    top: 2,
    right: 2,
  },
});

export default styles;
