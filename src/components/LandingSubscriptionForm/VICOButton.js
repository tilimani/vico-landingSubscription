import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";
const VICOButton = ({ text, color, onClick, variant, white }) => {
  const classes = useStyles();
  return (
    <Button
      variant={variant}
      color={color}
      className={clsx({ [classes.root]: true, [classes.white]: white })}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: 58,
    fontWeight: "bold",
    fontSize: 16,
    borderRadius: 12,
    marginBottom: "1rem",
    "&:hover": {}
  },
  white: {
    backgroundColor: "white",
    color: "#ef8e01"
  }
}));

export default VICOButton;
