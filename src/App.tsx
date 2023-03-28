import { AuthContext } from "./context/AuthContext";
import { useState } from "react";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [user, setUser] = useState<String>();

  return (
    <AuthContext.Provider value={{ user, setUser } as any}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
