import React from 'react';

export default class Price extends React.Component {
  render() {
    return (
      <div style={{float: 'left'}}>
        <span style={{color: 'yellow'}}>
          {Math.floor(this.props.price/10000)}g
        </span>
        <span style={{color: 'silver'}}>
          {Math.floor(this.props.price%10000/100)}s
        </span>
        <span style={{color: 'brown'}}>
          {this.props.price%100}c
        </span>
      </div>
    );
  }
}
