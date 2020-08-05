import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import AOS from "aos";
import "aos/dist/aos.css";

import theme from "./common/theme";
import LandingSubscriptionForm from "./components/LandingSubscriptionForm/LandingSubscriptionForm";

function App() {
  AOS.init();
  return (
    <ThemeProvider theme={theme}>
      <LandingSubscriptionForm />
    </ThemeProvider>
  );
}

export default App;
