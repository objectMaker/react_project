import './App.css';
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import  {Component,Fragment} from 'react';
import {Route,Switch} from 'react-router-dom';
class App extends Component{
    render() {
        return (<Fragment>
            <Switch>
                <Route path='/admin'>
                    <Admin/>
                </Route>
                <Route path='/login'>
                    <Login/>
                </Route>
                <Route path='/'>
                    <Login/>
                </Route>
            </Switch>
        </Fragment>)
    }
}
export default App;