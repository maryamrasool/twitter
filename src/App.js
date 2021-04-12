import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from './components/Welcome/Welcome';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />\
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
