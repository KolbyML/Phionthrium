import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainPage } from "./pages/Main";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { PageNotFound } from "./pages/PageNotFound";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { createContext, useEffect, useState } from "react";
import { Browse } from "./pages/Browse";

export const PublicKeyContext = createContext({ publicKey: undefined, setPublicKey: (key) => {}});

const App = () => {    
  const [publicKey, setPublicKey] = useState(undefined)

  return (
    <PublicKeyContext.Provider value={{ publicKey, setPublicKey }}>
      <div className="App">
        <Router>
          <Switch>
              <Route exact path='/' component={MainPage} />
              <Route path='/login' component={Login} />
              <Route path='/browse' component={Browse} />
              <Route path='/profile/:id' component={Profile} />
              <Route path="/404" component={PageNotFound} />
              <Route component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    </PublicKeyContext.Provider>
  );
}

export default App;
