import React from "react";
import { Grid } from "@material-ui/core";
import "./index.css";

const VICOScrollArrow = ({ href }) => {
  return (
    <Grid container justify={"center"}>
      <Grid id="sectionArrow" class="demo">
        <a href={href}>
          <span />
          &nbsp;
        </a>
      </Grid>
    </Grid>
  );
};
export default VICOScrollArrow;
