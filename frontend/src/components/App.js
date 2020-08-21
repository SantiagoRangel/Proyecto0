import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from './Form'
import Login from './Login'
import EventList from './EventList'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { Redirect } from 'react-router';

class App extends Component{
    
    render(){

        return <Router>
        <div className="App">
          <Route exact path="/" render={() => <Redirect to="/Register" />} />
          <Route  path="/Register" component={Form} />

          <Route path="/Login" component={Login} />
          <Route path="/EventList" component={EventList} />

        </div>
      </Router>
    }
}

ReactDOM.render(<App />, document.getElementById('app'));