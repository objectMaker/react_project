import Admin from "../pages/Admin";
import {connect} from "react-redux";
import {increment,decrement} from '../redux/actions/count_action'
export default connect((state)=>({count:state.count}),{
    incre:increment,
    decre:decrement
})(Admin)