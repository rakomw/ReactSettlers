import React from 'react';

class Road extends React.Component{
  render() {
    return (
      <div className={'road-'+this.props.direction} />
    );
  }
}

export default Road;
