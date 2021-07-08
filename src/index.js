import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './screens/Login'
import Register from './screens/Register'
import HomeScreen from './screens/HomeScreen'
// import Notfound from './screens/Notfound'
import reportWebVitals from './reportWebVitals';
import "./bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch,BrowserRouter,Route,Link } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const routing= (
  <BrowserRouter>
  
  <Switch>
  <Route exact path="/" component={HomeScreen}/>
  <Route path="/login" component={Login}/>
  <Route path="/register" component={Register}/>
  <Route path="/productscreen" component={ProductScreen}/>
  {/* <Route component={Notfound}></Route> */}
  </Switch>
  
  </BrowserRouter>
)








ReactDOM.render(routing, document.getElementById('root')
);


reportWebVitals();

