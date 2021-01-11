import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './containers/Home/Home';
import Profile from './containers/Profile/Profile';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
        <Router>

            <Header/>
          
             <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/profile" exact component={Profile} />
             </Switch>


        </Router>
    </div>
  );
}

export default App;
