import React from 'react';
import Rating from './Rating';

function DriverCard() {
  return (
    <div className="DriverCard">
      <img className="left" src={this.props.img} alt='cardImg' />
      <div className="right">
        <h2>{this.props.name}</h2>
        <Rating>{this.props.rating}</Rating>
        <p>{this.props.car.model} - {this.props.car.licensePlate}</p>
      </div>
    </div>
  );
}


export default DriverCard;
