import React from 'react';


function Rating() {
  let rating = this.props.children;
  return (
    <div className="Rating">
      {rating >= 0.5 ? '★' : '☆'}
      {rating >= 1.5 ? '★' : '☆'}
      {rating >= 2.5 ? '★' : '☆'}
      {rating >= 3.5 ? '★' : '☆'}
      {rating >= 4.5 ? '★' : '☆'}
    </div>
  )
}

export default Rating;
