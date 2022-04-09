import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListNotesComponent';
import CreateEmployeeComponent from './components/CreateNotesComponent';
import ViewEmployeeComponent from './components/ViewNotesComponent';

function App() {
  return (
    <div>
        <Router>

                <div className="container">
                    <Switch>
                          <Route path = "/" exact component = {ListNotesComponent}></Route>
                          <Route path = "/notes" component = {ListNotesComponent}></Route>
                          <Route path = "/add-notes/:id" component = {CreateNotesComponent}></Route>
                          <Route path = "/view-notes/:id" component = {ViewNotesComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>

        </Router>
    </div>

  );
}

export default App;