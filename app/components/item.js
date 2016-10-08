import React from 'react';
import Price from './price.js'
var moment = require('moment');
import { Link } from 'react-router'

export default class Item extends React.Component {
  render() {
    return (
      <div>
        Item Name: {this.props.item.ItemName}<br/>
        <div style={{float: 'left'}}>Buy Price: </div><Price price={this.props.buy_price}/><br/>
        Updated:
          {
            moment().diff(
                moment(new Date(this.props.updated_at)),
                'minutes'
            ) + ' minutes ago'}
            <br/>
        <Link to={`/item/${this.props.item.ItemID}/graph`}>Graph</Link>
      </div>
    );
  }
}
