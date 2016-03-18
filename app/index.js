import 'babel-polyfill';
require('./main.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import ItemSummary from './components/item_summary.js'
import CraftSummary from './components/craft_summary.js'
import Items from './components/items.js'
import { Router, Route, hashHistory } from 'react-router'

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/items" component={Items}/>
      <Route path="/item/:itemId" component={ItemSummary}/>
      <Route path="/item/:itemId/crafts" component={CraftSummary}/>
    </Router>,
    document.body
);
