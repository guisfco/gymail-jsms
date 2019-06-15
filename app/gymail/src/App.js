import axios from 'axios'
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import ReactLoading from 'react-loading'
import { Login, Register, Dashboard } from './scenes/index'
import { Header, MenuLateral, Toastr } from '../src/components/index'
import CONFIG from './config';
import './index.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      onLoading: false
    }
    this.axiosConfig()
  }

  axiosConfig() {
    axios.interceptors.request.use((config) => {
      this.toggleLoading()
      return config
    }
    )

    axios.interceptors.response.use(
      response => successHandler(response),
      error => errorHandler(error)
    )

    const isHandlerEnabled = (config = {}) => {
      return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ?
        false : true
    }

    const errorHandler = (error) => {
      this.toggleLoading()
      if (isHandlerEnabled(error.config)) {
        Toastr.error(error.response.data.message)
      }
      return Promise.reject({ ...error })
    }

    const successHandler = (response) => {
      this.toggleLoading()
      if (isHandlerEnabled(response.config)) {

      }
      return response
    }
  }

  toggleLoading = () => {
    this.setState({ onLoading: !this.state.onLoading })
  }

  render() {
    return (
      <Switch>
        {this.state.onLoading && <div className="block-screen-loader"><ReactLoading type={"spin"} className="loader-screen" color={"#1a237e"} /></div>}
        <Route component={Login} path={CONFIG.URL.LOGIN} exact />
        <Route component={Register} path={CONFIG.URL.CADASTRO} exact />
        <Route component={Header} path="/header" exact />
        <Route component={MenuLateral} path="/menu" exact />
        <Route component={Dashboard} path="/dashboard" exact />
      </Switch>
    );
  }

}
