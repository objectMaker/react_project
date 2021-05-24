import {Component} from "react";
import './index.css'
export default class Login extends Component{
    abc = ()=>{
        console.log(this.props.getGitData('v'));
    }
    render() {
        return (<div>
            <div id="gou">
                我是login组件
            </div>
            <button onClick={this.abc}>aaa</button>
        </div>)
    }
}