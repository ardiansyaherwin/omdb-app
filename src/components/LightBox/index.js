import React from "react";
import { PropTypes } from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogContent,
  IconButton,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

import styles from "./LightBox-jss";

const LightBox = (props) => {
  const { source, classes, showDialog, onClose } = props;
  const handleClose = () => {
    onClose()
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={showDialog}
    >
      <DialogContent dividers className={classes.dialogContent}>
        <img src={source} className={classes.dialogContentImage} alt="" />
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
        >
          <Close />
        </IconButton>
      </DialogContent>
    </Dialog>
  );
};

LightBox.propTypes = {
  source: PropTypes.string.isRequired,
  showDialog: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(LightBox);
