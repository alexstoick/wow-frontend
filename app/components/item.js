import React from 'react';
import Price from './price.js'

export default class Item extends React.Component {
  render() {
    return (
      <div>
        Item Name: {this.props.item.ItemName}<br/>
        <div style={{float: 'left'}}>Buy Price: </div><Price price={this.props.buy_price}/>
      </div>
    );
  }
}
