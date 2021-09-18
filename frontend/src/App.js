import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainPage } from "./pages/Main";
import { Login } from "./pages/Login";
import { PageNotFound } from "./pages/PageNotFound";

function App() {
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
