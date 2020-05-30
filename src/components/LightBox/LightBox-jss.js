const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: 'white',
    background: "rgba(0,0,0,.9)",
  },
  dialogContent: {
    padding: "0 !important",
    border: 0,
  },
  dialogContentImage: {
    display: "block",
    width: "100%",
  },
});

export default styles;
