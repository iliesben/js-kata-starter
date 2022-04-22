import React, { useState } from "react";
import { Grid } from "./Components/Grid";

function App() {
  return (
    <div className="App">
      <Grid started={[20, 20]} />
    </div>
  );
}

export default App;
