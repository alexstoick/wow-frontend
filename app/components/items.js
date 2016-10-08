import React from 'react';
import fetch from 'isomorphic-fetch';
import Item from './item.js'

export default class Items extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.state.elements = []
  }

  async componentDidMount() {
    const result = await fetch('https://item-list.wow.stoica.xyz/v1/');
    const json = await result.json();
    json.map(async (itemId) => {
        const result = await fetch('https://api.wow.stoica.xyz/v1/items/' + itemId)
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
          <button className="back" onClick={this.props.history.goBack}>Back</button>
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
