import Admin from "../pages/Admin";
import {connect} from "react-redux";
import {INCREMENT,DECREMENT} from "../redux/action_types";
export default connect((state)=>({count:state.count}),{
    incre:INCREMENT,
    decre:DECREMENT
})(Admin)