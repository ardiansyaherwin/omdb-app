const styles = (theme) => ({
  root: {
    "& .MuiTypography-overline": {
      fontSize: "0.45rem",
    },
  },
  paperRoot: {
    padding: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  movieDetailPaper: {
    minHeight: "80vh",
  },
  movieDetailCard: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  columnPaper: {
    padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
    borderRadius: 0,
    boxShadow: "none",
  },
});

export default styles
