import React, { Component } from 'react';

class ClickablePicture extends Component {
  state = {
    isClicked: false
  }

  handleClick = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }))
  }
  render() {
    return <img
      onClick={this.handleClick}
      className="ClickablePicture"
      src={this.state.isClicked ? this.props.imgClicked : this.props.img}
      alt="picturImg" />
  }
}

export default ClickablePicture;
