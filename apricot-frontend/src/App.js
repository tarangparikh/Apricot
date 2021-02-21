import React, {Component} from 'react';
import './App.css';
import Login from "./Login/Login";
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import Home from "./Home/Home";
import SignUp from "./SignUp/SignUp";



class App  extends Component{
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/signUp" component={SignUp}/>
                        <Route exact path="/login" component={Login} />
                        <Route path="/" component={Home}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
