import React from 'react';
import Price from './price.js'

export default class Item extends React.Component {
  render() {
    return (
      <div>
        Item Name: {this.props.item.ItemName}<br/>
        Buy Price: <Price price={this.props.buy_price}/>
      </div>
    );
  }
}
