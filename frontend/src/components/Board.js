import React from 'react';
import Hex from './Hex.js';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function buildBoard(){
  var lands = ['forest', 'forest', 'forest', 'forest', 'field', 'field',
  'field', 'field', 'pasture', 'pasture', 'pasture', 'pasture', 'hill',
  'hill', 'hill', 'mountain', 'mountain', 'mountain']

  var hexes = [];

  shuffleArray(lands);

  for ( var k = 0; k < 9; k++ ){
    if (k == 7){
      hexes.push(<Hex terrain={lands[2*k]} number='2' />);
      hexes.push(<Hex terrain={lands[2*k+1]} number='12' />);
    }
    else{
      hexes.push(<Hex terrain={lands[2*k]} number={k+3} />);
      hexes.push(<Hex terrain={lands[2*k+1]} number={k+3} />);
    }
  }

  hexes.push(<Hex terrain='desert' />);

  shuffleArray(hexes);

  var nextHex = 0;
  var rows = [];
  for ( var i = -2; i <= 2; i++ )  {
    var thisRow = [];
    for (var k = 0; k < 5-Math.abs(i); k++) {
      thisRow.push(hexes[nextHex]);
      nextHex++;
    }
    rows.push(<div className='row'>{thisRow}</div>);
  }
  return rows;
}


class Board extends React.Component {

  constructor(props){
    super(props);
    this.state = { rows: buildBoard() };
  }

  render() {
    return (
      <div className='board'>
        {this.state.rows}
      </div>
    );
  }
}

export default Board;
