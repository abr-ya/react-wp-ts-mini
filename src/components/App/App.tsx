import React from "react";
import "./App.scss";
import classes from "./App.scss";
import KMSelect from "../KMSelector/KMSelect";
import data from "../../data";

const App = (): JSX.Element => (
  <div className={classes.container}>
    <h1>Hello, React!</h1>
    <div className={classes.selectWrapper}>
      <KMSelect placeholder="Filter" data={data} callback={console.log} />
    </div>
  </div>
);

export default App;
