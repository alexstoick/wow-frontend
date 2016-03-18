import React from 'react';
import fetch from 'isomorphic-fetch';
import Item from './item.js'

export default class Items extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.state.itemIds = [
      113263, 113262, 113261, 113264,
      118472,
      128018, 128010,
      128012,
      128013,
      128014,
    ]
    this.state.elements = []
  }

  async componentDidMount() {
    this.state.itemIds.map(async (itemId) => {
        const result = await fetch('http://82.196.11.214:3000/v1/items/' + itemId)
        const json = await result.json();
        let newElements = this.state.elements;
        newElements.push(json);
        this.setState({elements: newElements});
    });
  }

  render() {
    if (this.state.elements) {
      return (
        <div>
          {this.state.elements.map(
            function(element, i) {
              return (
                <div style={{float: 'left', margin: 10+'px', display:'inline-block'}} key={'item' + i}>
                  <Item
                    item={element.Item}
                    buy_price={element.BuyPrice}
                    updated_at={element.UpdatedAt}
                  />
                  <br/>
                  <br/>
                </div>
              )
            })
          }
        </div>
      );
    } else {
      return (
        <div>
          LOADING
        </div>
      );
    }
  }
}
