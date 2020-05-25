import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Classes from "./components/Classes";
import Navbar from "./components/Navbar";
function App() {
  return (
   <React.Fragment>
   <Switch>
     <Navbar/>
     <Route  path="/products" component={ProductList}/>
     <Route exact path ="/" component={Home}/>
     <Route path="/details" component={Details}/>
     <Route path="/cart" component={Cart}/>
     <Route path="/classes" component={Classes}/>
     <Route component={Default}/>
   </Switch>
   <Modal/> 
   <Footer/>
   </React.Fragment>
  
  );
}

export default App;
