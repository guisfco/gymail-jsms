import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import { Login, Register } from './scenes/index'
import { Header, MenuLateral } from '../src/components/index'
import CONFIG from './config';

function App() {
  return (
    <Switch>
      <Route component={Login} path={CONFIG.URL.LOGIN} exact/>
      <Route component={Register} path={CONFIG.URL.CADASTRO} exact/>
      <Route component={Header} path="/header" exact/>
      <Route component={MenuLateral} path="/menu" exact/>
    </Switch>
  );
}

export default App;
