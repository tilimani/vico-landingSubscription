import React from "react";
import { TextField, makeStyles, fade } from "@material-ui/core";
import clsx from "clsx";

const useStylesVICO = makeStyles(theme => ({
  fullWidth: {
    width: "100%"
  },
  root: {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&.MuiInputBase-multiline": {
      paddingLeft: theme.spacing(1.5),
      paddingRight: theme.spacing(1),
    },
    "&:hover": {
      backgroundColor: "#fff"
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main
    }
  },
  focused: {}
}));

function VICOTextField(props) {
  const classes = useStylesVICO();

  return (
    <TextField
      className={classes.fullWidth}
      InputProps={{ classes, disableUnderline: true }}
      {...props}
    />
  );
}

export default VICOTextField;
