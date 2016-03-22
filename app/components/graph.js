import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, BarSeries} from 'react-vis';
import React from 'react';

export default class Graph extends React.Component {
  render() {
    return (
        <XYPlot width={300} height={300}>
          <HorizontalGridLines />
          <LineSeries data={[ {x: 1, y: 10}, {x: 2, y: 5}, {x: 3, y: 15} ]} />
          <BarSeries data={[ {x: 1, y: 5}, {x: 2, y: 3}, {x: 3, y: 50} ]} />
          <XAxis />
          <YAxis />
        </XYPlot>
    );
  }
}
