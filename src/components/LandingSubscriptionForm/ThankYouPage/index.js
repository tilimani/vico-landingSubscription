import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import VICOButton from "../VICOButton";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    padding: theme.spacing(1)
  },
  heroContainer: {
    background:
      "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1531686264889-56fdcabd163f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80')",
    backgroundSize: "cover",
    minHeight: "100vh",
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4)
    }
  },
  textWhite: {
    color: "#fff"
  }
}));

export default function App(props) {
  const classes = useStyles();
  return (
    <Grid
      spacing={1}
      alignItems="center"
      justify="center"
      container
      className={classes.heroContainer}
    >
      <Grid item xs={12} md={6} sm={6} className={classes.margin}>
        <h1 className={classes.textWhite}>{props.header}</h1>
        <h3 className={classes.textWhite}>{props.subtitle}</h3>
        <Grid item xs={12} md={12} sm={12}>
          <VICOButton
            text={"🔎 Mostrar habitaciones"}
            color={"primary"}
            variant={"contained"}
            onClick={() => console.log("test")}
          />
          <VICOButton
            text={"💬 Abrir mi WhatsApp"}
            color={"secondary"}
            variant={"contained"}
            onClick={() => console.log("test")}
          />
          <VICOButton
            text={"📚 Ir al Blog"}
            color={"primary"}
            variant={"outlined"}
            onClick={() => console.log("test")}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
