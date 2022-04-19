import React, { useState } from "react";
import { Grid } from "./Components/Grid";

function App() {
  const [count, setCount] = useState(5);

  return (
    <div className="App">
      <Grid />
    </div>
  );
}

export default App;
