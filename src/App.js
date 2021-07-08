import React from 'react'
import Header from "./component/Header";
import Footer from "./component/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import {Container} from "react-bootstrap";
import {BrowserRouter as Router,Route} from "react-router-dom";



export default  function App()
{
  return(

<Router>
  <Header/>
  <main className='py-3'>
    <Container>
      <Route path='/' component={HomeScreen}exact/>
      <Route path='/product/:id' component={ProductScreen}exact/>
      </Container>
      </main>
      <Footer/>
</Router>

  );
}