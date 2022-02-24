import React from 'react';
import Hex from './Hex.js';
import Road from './Road.js';
import Town from './Town.js';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function makeHexes(){
  var lands = ['forest', 'forest', 'forest', 'forest', 'field', 'field',
  'field', 'field', 'pasture', 'pasture', 'pasture', 'pasture', 'hill',
  'hill', 'hill', 'mountain', 'mountain', 'mountain']

  var hexes = [];

  shuffleArray(lands);

  for ( var k = 0; k < 9; k++ ){
    if ((k+3) === 7){
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
  var hexRows = [];
  for ( var i = -2; i <= 2; i++ )  {
    var thisRow = [];
    for (k = 0; k < 5-Math.abs(i); k++) {
      thisRow.push(hexes[nextHex]);
      nextHex++;
    }
    hexRows.push(<div className='row-hex'>{thisRow}</div>);
  }
  return hexRows;
}

function makeRoads(){
  var roadRows = [];

  for(var i = 0; i < 3; i++){
    var horizontalRow = [];

    for(var k = 0; k < i + 3; k++){
      horizontalRow.push(<Road direction='southwest' />);
      horizontalRow.push(<Road direction='northwest' />);
    }
    roadRows.push(<div className='row-road-horizontal' >{horizontalRow}</div>);

    var verticalRow = [];
    for(k=0; k < i + 4; k++){
      verticalRow.push(<Road direction='vertical'/>);
    }
    roadRows.push(<div className='row-road-vertical'>{verticalRow}</div>);
  }

  for(i = 0; i < 2; i++){
    horizontalRow = [];
    for (k = 0; k < 5 - i; k++){
      horizontalRow.push(<Road direction='northwest' />);
      horizontalRow.push(<Road direction='southwest' />);
    }

    roadRows.push(<div className='row-road-horizontal'>{horizontalRow}</div>);
    verticalRow = [];
    for(k=0; k < 5 - i; k++){
      verticalRow.push(<Road direction='vertical'/>);
    }
    roadRows.push(<div className='row-road-vertical'>{verticalRow}</div>);
  }

  horizontalRow = [];
  for (k = 0; k < 3; k++){
    horizontalRow.push(<Road direction='northwest' />);
    horizontalRow.push(<Road direction='southwest' />);
  }

  roadRows.push(<div className='row-road-horizontal'>{horizontalRow}</div>);

  return roadRows;
}

function makeTowns(){
  var townRows = [];

  for (var i = 0; i < 3; i++){
    var nextRow = [];
    for (var k = 0; k < i + 3; k++){
      nextRow.push(<Town corner='left'/>);
      nextRow.push(<Town corner='top' />);
    }
    nextRow.push(<Town corner='left' />);

    townRows.push(<div className='row-town'>{nextRow}</div>);
  }

  for (i = 0; i < 3; i++){
    nextRow = [];
    nextRow.push(<Town corner='top' />);
    for (k = 0; k < 5 - i; k++){
      nextRow.push(<Town corner='left'/>);
      nextRow.push(<Town corner='top' />);
    }

    townRows.push(<div className='row-town'>{nextRow}</div>);
  }
  return townRows;
}

class Board extends React.Component {

  constructor(props){
    super(props);
    this.state = { hexes: makeHexes(), roads: makeRoads(), towns: makeTowns() };
  }

  render() {
    return (
      <div className='board'>
        <div className='hexLayer'>
          {this.state.hexes}
        </div>
        <div className='townLayer'>
          {this.state.towns}
        </div>
        <div className='roadLayer'>
          {this.state.roads}
        </div>
      </div>
    );
  }
}

export default Board;
