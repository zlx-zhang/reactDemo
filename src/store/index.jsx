import { createStore } from "redux";
//导入我们自己的reducer处理函数
import { reducer } from "../reducers/index1";

export default createStore(reducer)