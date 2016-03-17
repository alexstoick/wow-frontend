import React from 'react';
import Item from './item.js'
import Price from './price.js'

export default class CraftItem extends React.Component {
  render() {
    return (
      <div>
        <Item item={this.props.item.Item} buy_price={this.props.item.BuyPrice}/>
        Craft price: <Price price={this.props.item.CraftPrice}/>
        <br/>
      </div>
    );
  }
}
