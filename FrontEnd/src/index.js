import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Components/Home';
import Get from './Components/Get';
import Add from './Components/Add';
import Edit from './Components/Edit';
import reportWebVitals from './reportWebVitals';
import {Route,Link,BrowserRouter as Router, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const logout = () => {
  localStorage.clear();
}
ReactDOM.render(

     <Router>
     <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                  <a class="navbar-brand" href="#">Positive Quotes</a>
                   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
                     </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="./Get">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./Add">Add</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./" onClick={logout}>Logout</a>
      </li>
    </ul>
  </div>
</nav>
     <div className="">
      <Route exact path='/' component={ App } /> 
     <Route path='/Get'component={Get}/>
     <Route path='/Add'component={Add}/>
     <Route path='/Edit/:id' component={Edit} />
    </div>
   </Router>,
 
 
  document.getElementById('root')
);

reportWebVitals();
