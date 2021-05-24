import {Component} from 'react';
import './index.css'
class Admin extends Component {
    incre = ()=>{
        this.props.incre(this.refs.ab.value*1)
    }
    decre = ()=>{
        this.props.decre(this.refs.ab.value*1)
    }
    render() {
        return (
            <div>
                <div id='zhu'>
                    我是admin组件
                </div>
                <br/>
                <br/>
                <button onClick={this.incre}>+</button>
                <button onClick={this.decre}>-</button>
                <select ref='ab'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <span>我现在是{this.props.count}</span>
            </div>

        );
    }
}
export default Admin;