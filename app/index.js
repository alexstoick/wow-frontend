console.log("lol");
require('babel-core/register')
require('babel-polyfill')

import React from 'react';
import ReactDOM from 'react-dom';
import Item from './components/item.js'

ReactDOM.render(
    <Item message="lol"/>,
    document.body
);
