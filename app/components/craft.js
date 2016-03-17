import React from 'react';
import Price from './price.js'

export default class Craft extends React.Component {
  render() {
    return (
      <div style={{marginBottom: 10 + 'px'}}>
        Craft Name: {this.props.craft.Name}<br/>
        Profession: {this.props.craft.Profession}<br/>
        Craft Price: <Price price={this.props.craft.Price}/>
      </div>
    );
  }
}
