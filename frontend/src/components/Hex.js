import React from 'react';

function importAll(r) {
  let imported = [];
  r.keys().forEach((item, i) => {
    imported[item.replace('./','').replace('.png','')] = r(item).default;
  });
  return imported;
}

function sayHi() {
  alert("hi");
}
const images = importAll(require.context('../assets/hexes/', false, /\.png$/));

class Hex extends React.Component{
  render() {
    return (
      <div className='Hex'>
        <img className='HexImage' src={images[this.props.terrain]} alt={this.props.terrain} onClick={() => {alert(this.props.terrain)}} />
        <span className='HexNumber' onClick={() => {alert(this.props.number)}}> {this.props.number} </span>
      </div>
    );
  }
}

export default Hex;
