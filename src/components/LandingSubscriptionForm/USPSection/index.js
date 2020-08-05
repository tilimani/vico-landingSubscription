import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { textAlign } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  section_wrapper: { marginTop: "8vh", padding: "0 8vw" },
  uspContainer: {},
  emoji: {
    fontSize: "300%",
    width: "64px",
    height: "64px"
  },
  section_title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: 34,
    color: theme.palette.secondary.dark,
    [theme.breakpoints.down("sm")]: {
      fontSize: 30
    }
  }
}));

export default function App() {
  const classes = useStyles();
  const uspList = [
    {
      icon: "🔒",
      title: "100% verificadas",
      description:
        "Ofrecemos más de 700 ocpiones en Bogotá y Medellín. Todos fueron verificados por nuestro equipo."
    },
    {
      icon: "❌",
      title: "Sin fiador",
      description:
        "No hay la necesidad de buscar un fiador, nada más con el depósito puedes tomar la habitación."
    },
    {
      icon: "📱",
      title: "Visitas virtual",
      description:
        "Puedes ver todas las opciones sin necesidad de salir de tu casa. Utilzamos Skype y Hangouts."
    },
    {
      icon: "💬",
      title: "Hablar con el propietario",
      description:
        "Habla y conversa directamente con los propietarios para aclarar tus dudas."
    },
    {
      icon: "🛏️",
      title: "Amueblado",
      description:
        "Todas las habitacioens y apartamentos son amueblados, puedes llegar y vivir de una."
    },
    {
      icon: "💅",
      title: "Te ayudamos",
      description:
        "Te asesoramos para encontrar la opción perfecta y te acompañamos hasta que te quieres mudar otra vez."
    }
  ];

  return (
    <Grid
      spacing={1}
      alignItems="center"
      justify="center"
      container
      className={classes.uspContainer}
    >
      <Grid container className={classes.section_wrapper}>
        <Grid item xs={12}>
          <h1 className={classes.section_title}>
            Más de 700 habitaciones y apartamentos para escoger.
          </h1>
        </Grid>
        <Grid container spacing={4}>
          {uspList.map((item, i) => (
            <Grid item md={4} sm={6} xs={12}>
              <span
                className={classes.emoji}
                role={"img"}
                aria-slabel={item.title}
              >
                {item.icon}
              </span>
              <h2 style={{ margin: 0 }}>{item.title}</h2>
              <p>{item.description}</p>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
