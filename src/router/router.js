/**
 * Created by lenovo on 2017/2/14.
 */
import React from 'react'
import {Router , Route , IndexRoute , hashHistory} from 'react-router'

import IndexPage from '../components/IndexPage'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'

export default class RouterForOCS extends React.Component{
  render(){
    return(
      <Router history={hashHistory}>
        <Route path='/' component={IndexPage}>
          <IndexRoute component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Route>
      </Router>
    )
  }
}
