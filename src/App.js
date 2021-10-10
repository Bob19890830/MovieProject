import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./Home";
import Liked from "./Liked";
import About from "./About";
import Login from "./Login";
import MovieDetails from "./MovieDetails";

function App() {

  return (
    <Router>

      <div className="App">
          <header className="App-header">
            <div className="navigation">
                <div><img className='logo' src='./logo.svg' /></div>
                <Link to="/"><div className='tab'>Home</div></Link>
                <Link to='/liked'><div className='tab'>Liked</div></Link>
                <Link to='/about'><div className='tab'>About</div></Link>
                <Link to='/login'><div className='tab' style={{position:'absolute', right:'10px'}}>Login</div></Link>
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
