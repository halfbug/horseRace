 import './style.css'

 import Navbar from '../components/Navbar.js'
 import Maincontainer from '../components/maincontainer.jsx'
 import Footer from '../components/Footer.js'
 import React, { Component } from "react";
 import loadjs from 'loadjs'


 



 class Dashboard extends Component {
  componentDidMount(){
    loadjs('/js/slick.min.js', function () {
                                                        loadjs('/js/new.js');
                                                    });
    }
  render() {
    return (
      <>
      <Navbar/>
      <Maincontainer/>
       
      
      
      <Footer/>
      </>
    );
  }
}
    
      
      
      
      
    
    export default Dashboard