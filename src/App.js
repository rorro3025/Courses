import "bootswatch/dist/pulse/bootstrap.min.css"
import {Switch, BrowserRouter as Router, Route} from "react-router-dom"
import NavBarP from "./components/NavBar";
import AddNew from './components/AddNew';
import Home from './components/Home';
import Edit from './components/Edit';

function App() {
    return (
        <Router>
            <NavBarP/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/add" component={AddNew}/>
                <Route path="/edit/:id" component={Edit}/>
            </Switch>
        </Router>
    );
}

export default App;
