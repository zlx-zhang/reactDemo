import React, { Component } from "react";
import { Carousel } from 'antd';
import './App.css'
import '../node_modules/antd/dist/antd.css'
import Api from "./Api";

export default class Swiper extends Component {
  constructor() {
    super();
    this.state = {
      image: []
    }
  }
  async componentDidMount() {
    try {
      const url = "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"
      const res = await fetch(url, {
        method: 'GET'
      })
      const data = await res.json();
      console.log("---------", data)
      this.setState({ 
        image: data.message
      })
    } catch (err) {
      console.log("捕捉错误", err)
    }

  }
  render() {
    let { image } = this.state;
    return (
      <div className="container">
        <Carousel autoplay >
          {
            image.map((item, index) => {
              return (
                <div className="App" key={index}>
                  <img src={item.image_src} alt="轮播" title={item.navigator_url}/>
                </div>
              )
            })
          }
        </Carousel><br />
        <Api />
      </div>
    )
  }
}