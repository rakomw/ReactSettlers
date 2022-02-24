import React from 'react';

import settlement from '../assets/pieces/settlement.gif';
import city from '../assets/pieces/city.gif';


class Road extends React.Component {

  constructor(props){
    super(props);
    this.state = { buildLevel: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({
      buildLevel: (prevState.buildLevel + 1) % 2
    }));
  }

  render() {
    switch (this.state.buildLevel) {
      case 0:
        return (
          <button className={'road-'+this.props.direction}  style={{opacity: "100%"}} onClick={this.handleClick}/>
        );
      case 1:
        return (
          <button className={'road-'+this.props.direction} style={{opacity: "50%"}} onClick={this.handleClick}/>
        );
      default:
        return (
          <div className={'town-'+this.props.corner} onClick={this.handleClick}/>
        );
    }
  }
}

export default Road;
