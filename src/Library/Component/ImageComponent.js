import React, { Component } from 'react'

export default class ImageComponent extends Component {
  render() {
    const {image, width, height} = this.props;
    return (
      <div>
        <img src={image} width={width} height={height} alt=""/>
      </div>
    )
  }
}
