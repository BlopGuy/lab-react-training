import React from 'react';

function Greetings() {
  let greetings = {
    de: 'Hallo',
    en: 'Hello',
    es: 'Hola',
    fr: 'Bonjour'
  };
  return (
    <div className="box">
      {greetings[this.props.lang]} {this.props.children}
    </div>
  )
}


export default Greetings;
