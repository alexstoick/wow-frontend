import React from 'react';

export default class Price extends React.Component {
  render() {
    return (
      <div>
        {Math.floor(this.props.price/10000)}g {Math.floor(this.props.price%10000/100)}s {this.props.price%100}c
      </div>
    );
  }
}
