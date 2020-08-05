import React from "react";
import {
  InputLabel,
  FormControl,
  NativeSelect,
  makeStyles,
  fade
} from "@material-ui/core";
import clsx from "clsx";
const useStylesVICO = makeStyles(theme => ({
  fullWidth: {
    width: "100%"
  },
  inputLabel: {
    "&.MuiInputLabel-shrink.MuiInputLabel-root": {
      transform: "translate(12px, 6px) scale(0.75)"
    }
  },
  root: {
    border: "1px solid #e2e2e1",
    marginBottom: "1rem",
    overflow: "hidden",
    height: "54px",
    paddingLeft: theme.spacing(1.5),
    borderRadius: 4,
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#fff"
    },
    "&$focused": {
      backgroundColor: "#fff",
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main
    },
    "&.MuiNativeSelect-filled": {
      padding: "27px 12px 10px",
      paddingLeft: theme.spacing(1.5)
    }
  },
  focused: {}
}));

function VICOSelect(props) {
  const classes = useStylesVICO();

  return (
    <FormControl
      variant="outlined"
      className={clsx(classes.root, classes.fullWidth)}
    >
      <InputLabel className={classes.inputLabel}>{props.label}</InputLabel>
      <NativeSelect
        className={classes.fullWidth}
        {...props}
        disableUnderline={true}
      >
        <option aria-label="None" value="" />
        {props.options.map((item, i) => (
          <>
            <option value={item.value}>{item.label}</option>
          </>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

export default VICOSelect;
