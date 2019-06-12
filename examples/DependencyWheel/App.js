import React from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsChart, withHighcharts, XAxis, YAxis, Title, DependencyWheelSeries, Tooltip
} from 'react-jsx-highcharts';
import ExampleCode from '../utils/ExampleCode';
import code from './exampleCode';

const data = {
  Brazil: { Portugal: 5, France: 1, Spain: 1, England: 1 },
  Canada: { Portugal: 1, France: 5, England: 1 },
  Mexico: { Portugal: 1, France: 1, Spain: 5, England: 1 },
  USA:    { Portugal: 1, France: 1, Spain: 1, England: 5 },
  Portugal: { Angola: 2, Senegal: 1, Morocco: 1, 'South Africa': 3 },
  France:   { Angola: 1, Senegal: 3, Mali: 3, Morocco: 3, 'South Africa': 1 },
  Spain:    { Senegal: 1, Morocco: 3, 'South Africa': 1 },
  England:  { Angola: 1, Senegal: 1, Morocco: 2, 'South Africa': 7 },
  'South Africa': { China: 5, India: 1, Japan: 3 },
  Angola:         { China: 5, India: 1, Japan: 3 },
  Senegal:        { China: 5, India: 1, Japan: 3 },
  Mali:           { China: 5, India: 1, Japan: 3 },
  Morocco:        { China: 5, India: 1, Japan: 3 }
};

const DependencyWheel = () => {
  const formattedData = Object.keys(data).reduce((arr, from) => {
    const weights = data[from];
    return arr.concat(Object.keys(weights).map(to => [from, to, weights[to]]));
  }, []);

  return (
    <div className="app">
      <HighchartsChart>
        <Title>Highcharts Dependency Wheel Diagram</Title>

        <XAxis type="category" />

        <YAxis>
          <DependencyWheelSeries name="Dependency Wheel demo series" data={formattedData} keys={['from', 'to', 'weight']} />
        </YAxis>

        <Tooltip />
      </HighchartsChart>

      <ExampleCode name="DependencyWheelSeries">{code}</ExampleCode>
    </div>
  );
}

export default withHighcharts(DependencyWheel, Highcharts);
