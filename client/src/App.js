import React, { Component } from 'react';
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Navbar/navbar';
import Selected from './Components/Selected/Selected';
class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            // animate__animated animate__zoomIn 
            <Router>
                <div className=' mainApp '>
                        <div className='wrapper'>
                            <Navbar/>
                            <div className='switch'>
                                <Route path='/' exact component={Selected}/> 
                            </div>
                        </div>
                </div>
            </Router>
         );
    }
}
 
export default MainApp;