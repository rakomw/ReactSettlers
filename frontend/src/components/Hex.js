import React from 'react';

import desert from '../assets/hexes/desert.png';

function importAll(r) {
  let imported = [];
  r.keys().forEach((item, i) => {
    imported[item.replace('./','').replace('.png','')] = r(item).default;
  });
  return imported;
}

const images = importAll(require.context('../assets/hexes/', false, /\.png$/));

class Hex extends React.Component{
  render() {
    return (
      <div className='Hex'>
        <img className='HexImage' src={images[this.props.terrain]} alt={this.props.terrain} />
        <span className='HexNumber'> {this.props.number} </span>
      </div>
    );
  }
}

export default Hex;
