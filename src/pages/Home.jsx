import React, { Component } from "react";
import { Carousel } from "antd";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      image: [],
    };
  }

  componentDidMount() {
    console.log("/////", this.props.location.state);
    this.setState(
      {
        image: [...this.props.location.state.image],
      },
      () => {
        console.log("/=====/", this.state.image);
      }
    );
  }
  render() {
    let { image } = this.state;
    return (
      <div className="container">
        <Carousel autoplay>
          {image.map((item, index) => {
            return (
              <div className="App" key={index}>
                <img
                  src={item.image_src}
                  alt="轮播"
                  title={item.navigator_url}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}
