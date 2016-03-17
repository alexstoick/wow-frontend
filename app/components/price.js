import React from 'react';

export default class Price extends React.Component {
  render() {
    return (
      <div style={{float: 'left'}}>
        <span style={{color: 'yellow'}}>
          {Math.floor(this.props.price/10000)}g
        </span>
        {Math.floor(this.props.price%10000/100)}s
        {this.props.price%100}c
      </div>
    );
  }
}
