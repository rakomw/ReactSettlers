import React from 'react';

class Town extends React.Component{
  render() {
    return (
      <div className={'town-'+this.props.corner} />
    );
  }
}

export default Town;
