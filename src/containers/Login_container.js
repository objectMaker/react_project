import Login from "../pages/Login";
import {connect} from "react-redux";
import {ASYNC_GIT_PERSON} from "../redux/action_types";
export default connect((state)=>({gitData:state.gitData}),{
    getGitData:ASYNC_GIT_PERSON
})(Login)