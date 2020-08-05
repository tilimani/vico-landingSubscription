import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import VICOButton from "./VICOButton";
import VICOTextField from "./VICOTextField";
import VICOSelect from "./VICOSelect";

const SubscriptionForm = ({ header }) => {
  const classes = useStyles();
  const cityOptions = [
    { value: "Medellín", label: "Medellín" },
    { value: "Poblado", label: "Poblado" },
    { value: "Laureles", label: "Laureles" }
  ];
  return (
    <Grid item xs={12}>
      <Grid container>
        <h3 className={`${classes.textWhite}`}>{header}</h3>
        <VICOTextField
          label="E-Mail*"
          type="mail"
          variant="filled"
          style={{ marginBottom: "1rem" }}
        />
        <VICOTextField
          label="Nombre completo*"
          variant="filled"
          style={{ marginBottom: "1rem" }}
        />
        <VICOSelect label="Ciudad*" variant="filled" options={cityOptions} />
        <VICOTextField
          label="Qué estás buscando?*"
          multiline
          rows={4}
          rowsMax={4}
          variant="filled"
          style={{ marginBottom: "1rem" }}
        />

        <VICOButton
          text={"Mandar mensaje"}
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
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  textWhite: {
    color: "#fff"
  }
}));

export default SubscriptionForm;
