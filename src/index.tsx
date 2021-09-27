import * as React from "react";
import "regenerator-runtime/runtime";
import { render } from "react-dom";
import App from "components/App/App";

const rootEl = document.getElementById("root");

render(<App />, rootEl);
