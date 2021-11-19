import React, { Component } from "react";
import { Carousel } from "antd";
import "./App.css";
import "../node_modules/antd/dist/antd.css";
import api from "./api/index";
import Add from "./Add";
import Home from "./pages/Home";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import { Link, Route, Redirect, Switch } from "react-router-dom";

export default class Swiper extends Component {
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
            <Link to={{pathname:"/home",state:{image:this.state.image}}}>Home</Link>
          </li>
          <li>
            <Link to="/main">Main</Link>
          </li>
        </ul>
        <Switch>
          {/* <Route  strict exact element={<Home />}></Route> */}
          <Route
            path="/home"
            
            component={Home}
          ></Route>
          <Route path="/main" component={Main}></Route>
          <Route component={NotFound}></Route>
          <Route path="/demo" render={() => <div>404页面</div>}></Route>
          {/* <Redirect to="/notfound"></Redirect> */}
        </Switch>
      </div>
    );
  }
}
