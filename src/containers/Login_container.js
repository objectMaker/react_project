import Login from "../pages/Login";
import {connect} from "react-redux";
import {asyncGitAction} from "../redux/actions/async_git_action";
export default connect((state)=>({gitData:state.gitData}),{
    getGitData:asyncGitAction
})(Login)