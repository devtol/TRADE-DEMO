import React from "react";
import * as s from "./App.styles";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import { menuItems } from "./data";

const App = () => {
  return (
    <s.App>
      <Sidebar menuItems={menuItems} />
      <Main />
    </s.App>
  );
};

export default App;
