import { createStore } from "redux";
import reducerRoot from "./reducer";

export default createStore(
     reducerRoot
     ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
