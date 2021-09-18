import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainPage } from "./pages/Main";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/PageNotFound";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useEffect } from "react";

const App = () => {    
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();


  useEffect(() => async () => {
      console.log(connection)
      console.log(publicKey, sendTransaction)
    }, [])


  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/login' component={Login} />
            <Route path='/browse' component={PageNotFound} />
            <Route path="/404" component={PageNotFound} />
            <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
