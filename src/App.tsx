import { useState } from "react";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [user, setUser] = useState<String>();

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
