import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./Home";
import Liked from "./Liked";
import About from "./About";
import Login from "./Login";
import MovieDetails from "./MovieDetails";
import {useEffect} from 'react';

import {useState} from "react";

function App() {

    const [user, setUser] = useState('Login');

    useEffect(() =>{
        if(localStorage.hasOwnProperty('user')){
            let loginUser = localStorage.getItem('user');
            let tem = JSON.parse(loginUser)
            setUser(tem['username']);
        }
    },[user])

    const logout = () => {
        localStorage.clear()
    }
    
    return (
    <Router>
      <div className="App">
          <header className="App-header">
            <div className="navigation">
                <div><img className='logo' src='./logo.svg' /></div>
                <Link to="/"><div className='tab'>Home</div></Link>
                <Link to='/liked'><div className='tab'>Liked</div></Link>
                <Link to='/about'><div className='tab'>About</div></Link>
                <Link to='/login'>
                    <div className='tab' style={{position:'absolute', right:'100px'}}>{user}</div>
                </Link>
                <Link to="/">
                <button className='tab' style={{position:'absolute', padding:'0', right:'20px', top:'20px'}} onClick={logout}>Logout</button>
                </Link>
            </div>
          </header>
        </div>

        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/liked' component={Liked}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/MovieDetails/:id' component={MovieDetails}></Route>
        </Switch>

    </Router>);
}

export default App;
