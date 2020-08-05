import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import VICOButton from "../VICOButton";
import SubscriptionForm from "../SubscriptionForm";
import VICOScrollArrow from "../VICOScrollArrow/VICOScrollArrow";

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
      "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url('https://vico.imgix.net/house_195_14_201812715343.jpeg')",
    backgroundSize: "cover",
    minHeight: "100vh",
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4)
    }
  },
  textWhite: {
    color: "#fff"
  },
  formContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 12,
    height: "50%",
    width: "100%",
    padding: "2rem 1rem"
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
        <Grid item xs={12} md={4} sm={8}>
          <VICOButton
            text={props.callToAction}
            color={"primary"}
            variant={"outlined"}
            onClick={() => console.log("test")}
          />
        </Grid>
      </Grid>

      <Grid item xs={12} md={4} sm={6}>
        <Grid
          className={classes.formContainer}
          container
          justify="center"
          direction="column"
        >
          <SubscriptionForm
            header={"Pónte en contacto y encuentra lo que buscas."}
          />
        </Grid>
      </Grid>
      <VICOScrollArrow />
    </Grid>
  );
}
