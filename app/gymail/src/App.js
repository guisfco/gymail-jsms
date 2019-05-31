import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { Login } from './scenes/index'

function App() {
  return (
    <Switch>
      <Route component={Login} path="/" />
    </Switch>
  );
}

export default App;
