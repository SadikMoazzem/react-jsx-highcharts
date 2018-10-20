import React from 'react';
import YAxis from '../../../src/components/YAxis/YAxis';
import Axis from '../../../src/components/Axis';

describe('<YAxis />', () => {
  it('renders an <Axis />', () => {
    const wrapper = shallow(<YAxis id="y" />);
    expect(wrapper).to.have.type(Axis);
  });

  it('renders an <Axis isX={false} />', () => {
    const wrapper = shallow(<YAxis id="yAxis" />);
    expect(wrapper).to.have.prop('isX').equal(false);
  });

  it('passes other props through to <Axis />', () => {
    const wrapper = shallow(<YAxis id="myOtherAxis" tickLength={1337} />);
    expect(wrapper).to.have.prop('tickLength').equal(1337);
  });
});
