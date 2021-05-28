import './App.css';
import Admin from "./containers/Admin";
import Login from "./containers/Login";
import {connect} from "react-redux";
import  {Component,Fragment} from 'react';
import {Route,Switch} from 'react-router-dom';
class App extends Component{
    render() {
        return (<Fragment>
            <Switch>
                <Route  path='/admin'>
                    <Admin {...this.props}/>
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
export default connect((state)=>({state}))(App)