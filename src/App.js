import React, {useState, useEffect} from 'react'
import './App.css';
import Navbar from './component/Navbar'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// The Navbar
import Home from './component/Home/Home'
import About from './component/About/About'
import Header from './component/Header/Header'
import Contact from './component/Contact/Contact'
import Service from './component/Servicess/Services'
import Portfolio from './component/Portfolio/Portfolio'
import Footer from './component/Footer/Footer'
//The info 
import {PortfolioInfo} from './Info/PortfolioInfo'
import {linkInfo} from './Info/LinksInfo'



function  App () {

   
    const [info, setInfo] = useState(PortfolioInfo);
    const [links, setLinks] = useState(linkInfo);
    return (
      <BrowserRouter>
        <Navbar links={links} />
        <Header data-aos="fade-right"/>
        <Switch>
          <Route exact path='/'component={Home} />
          <Route  path='/services' component={Service}/>
          <Route  path='/portfolio'component={() =>  <Portfolio info={info}/>}/>
          <Route  path='/about'component={About} />
          <Route  path='/contact' component={Contact}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    );
  
}

export default App;
