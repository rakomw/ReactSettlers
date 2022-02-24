import React from 'react';

import settlement from '../assets/pieces/settlement.gif';
import city from '../assets/pieces/city.gif';


class Town extends React.Component {

  constructor(props){
    super(props);
    this.state = { buildLevel: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({
      buildLevel: (prevState.buildLevel + 1) % 3
    }));
  }

  render() {
    switch (this.state.buildLevel) {
      case 1:
        return (
          <img className={'town-'+this.props.corner} src={settlement}  onClick={this.handleClick}/>
        );
      case 2:
        return (
          <img className={'town-'+this.props.corner} src={city} onClick={this.handleClick}/>
        );
      default:
        return (
          <button className={'town-'+this.props.corner} onClick={this.handleClick}/>
        );
    }
  }
}

export default Town;
