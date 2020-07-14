import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from "../components/Dashboard/Dashboard.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
