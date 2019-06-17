import axios from 'axios'
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import ReactLoading from 'react-loading'
import { Login, Register, Dashboard, EmailCreator } from './scenes'
import { Header, MenuLateral, Toastr } from '../src/components/index'
import CONFIG from './config';
import './index.css'
import FriendList from './scenes/FriendList/FriendList';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      onLoading: false
    }
    // this.axiosConfig()
  }

  axiosConfig() {
    axios.interceptors.request.use((config) => {
      this.toggleLoading()
      return config
    })

    axios.interceptors.response.use((response) => {
      this.toggleLoading()
      return response;
    }, (error) => {
      this.toggleLoading()
      return Promise.reject(error)
    })
  }

  toggleLoading = () => {
    this.setState({ onLoading: !this.state.onLoading })
  }

  render() {
    return (
      <Switch>
        {this.state.onLoading && <div className="block-screen-loader"><ReactLoading type={"spin"} className="loader-screen" color={"#1a237e"} /></div>}
        <Route component={Header} path="/header" exact />
        <Route component={MenuLateral} path="/menu" exact />
        <Route component={Dashboard} path="/dashboard" exact />
        <Route component={EmailCreator} path="/emailCreator" exact />
        <Route component={FriendList} path="/friends" exact />
        <Route component={Login} path={CONFIG.URL.PUBLIC.LOGIN} exact />
        <Route component={Register} path={CONFIG.URL.PUBLIC.CADASTRO} exact />
        <Route component={Dashboard} path={CONFIG.URL.PRIVATE.DASHBOARD} exact />
      </Switch>
    );
  }

}
