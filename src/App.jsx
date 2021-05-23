import './App.css';
import Admin from "./containers/Admin_container";
import Login from "./containers/Login_container";
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