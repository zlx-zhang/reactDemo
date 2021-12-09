import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom";
// import { HashRouter as Router} from "react-router-dom";
import { createStore } from "redux"
import { Provider } from 'react-redux';
import reducer from "./reducers/counter.jsx"

//创建store仓库
const store = createStore(reducer)
// store.subscribe(()=>{
//   console.log("state",store.getState())
// });

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App
          onIncrement={() => store.dispatch({ type: "INCREMENT" })}
          onDecrement={() => store.dispatch({ type: "DECREMENT" })}
          value={store.getState()}
        />
      </Router>
    </Provider>,
    document.getElementById('root')
  );
}
render();
store.subscribe(render)
