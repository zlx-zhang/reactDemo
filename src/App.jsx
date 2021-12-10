import React, { Component } from "react";
import { Carousel } from "antd";
import "./App.css";
import "../node_modules/antd/dist/antd.css";
import api from "./api/index";
import Add from "./Add";
import Home from "./pages/Home";
import Main from "./pages/Main";
import UCenter from "./pages/UCenter";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import MainDemo from "./pages/MainDemo";
import Book from "./pages/Book";
import JavaBook from "./pages/JavaBook";
import WebBook from "./pages/WebBook";
import Parent from "./components/coms/Parent";
import { Link, Route, Redirect, Switch, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { increment, decrement } from "./actions/counter";
import { store } from "./store/index";
import ComA from "./pages/ComA";
import ComB from "./pages/ComB";
//导入Provider组件，利用这个组件包裹我们的结构。从而达到统一的维护stroe的效果
import { Provider } from "react-redux";

//redux案例
import House from "./pages/house";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: [],
    };
  }
  async componentDidMount() {
    try {
      const url =
        "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata";
      const res = await fetch(url, {
        method: "GET",
      });
      const data = await res.json();
      console.log("---------", data);
      this.setState({
        image: data.message,
      });
    } catch (err) {
      console.log("捕捉错误", err);
    }

    const info = await api.getParams();
    const list = await info.json();
    console.log("list", list);

    // api.getParams().then(res =>res.json()).then(data=>{
    //   console.log("+++++++++",data)
    // })
    api.getToken({});
  }
  render() {
    console.log("props", this.props);
    const { increment, decrement } = this.props;
    // let { image } = this.state;
    return (
      // <div className="container">
      //   <Carousel autoplay>
      //     {image.map((item, index) => {
      //       return (
      //         <div className="App" key={index}>
      //           <img
      //             src={item.image_src}
      //             alt="轮播"
      //             title={item.navigator_url}
      //           />
      //         </div>
      //       );
      //     })}
      //   </Carousel>
      //   <br />
      //   <Add />

      // </div>
      <div>
        <ul>
          <li>
            <NavLink
              exact
              to={{ pathname: "/home", state: { image: this.state.image } }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/main">
              Main
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/ucenter">
              UCenter
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/shop">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/maindemo">
              MainDemo
            </NavLink>
          </li>
        </ul>
        <Switch>
          {/* <Route  strict exact element={<Home />}></Route> */}
          <Route exact path="/home" component={Home}></Route>
          <Route
            exact
            path="/main"
            render={(props) => <Main {...props} image={this.state.image} />}
          ></Route>
          <Route exact path="/ucenter/:name?" component={UCenter}></Route>
          <Route exact path="/shop" component={Shop}></Route>
          <Route exact path="/maindemo" component={MainDemo}></Route>
          <Book>
            <Switch>
              <Route exact path="/javabook" component={JavaBook}></Route>
              <Route exact path="/webbook" component={WebBook}></Route>
            </Switch>
          </Book>
          <Route component={NotFound}></Route>
          <Route path="/demo" render={() => <div>404页面</div>}></Route>
          {/* <Redirect to="/notfound"></Redirect> */}
        </Switch>
        <Parent></Parent>
        <House></House>
        <div className="container">
          <h1 className="jumbotron-heading text-center">{this.props.value}</h1>
          <p className="text-center">
            {/* <button onClick={this.props.onIncrement} className="btn btn-primary">increment</button>
            <button onClick={this.props.onDecrement} className="btn btn-success">decrement</button> */}
            <button onClick={() => increment()} className="btn btn-primary">
              increment
            </button>
            <button onClick={() => decrement()} className="btn btn-success">
              decrement
            </button>
          </p>
        </div>
        <Provider store={store}>
          <ComA />
          <ComB />
        </Provider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

const mapDispatchTopProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    },
  };
};

//先后顺序不能颠倒
export default connect(mapStateToProps, mapDispatchTopProps)(App);
