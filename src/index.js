import App from "./App";
import ReactDOM from 'react-dom'
import store from "./redux/store";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,document.getElementById('root'))