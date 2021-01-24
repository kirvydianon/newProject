import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dash from './Dash.js';
import Private from './Private.js';
import Login from './Login.js';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
    <h1>Application</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/Dash">
              <Dash />
            </Route>
            <Route path="/Private">
              <Private />
            </Route>
          </Switch>
        </BrowserRouter>
  </div>
);
}

export default App;
