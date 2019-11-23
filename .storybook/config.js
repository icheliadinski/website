import React from "react";
import { configure, addParameters, addDecorator } from "@storybook/react";
import { themes } from "@storybook/theming";
import "../src/index.scss";

addParameters({
  options: {
    theme: themes.dark
  }
});

addDecorator(storyFn => (
  <div
    style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
  >
    {storyFn()}
  </div>
));

configure(require.context("../src", true, /\.stories\.tsx?$/), module);
