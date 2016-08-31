import React from 'react';
import { shallow } from 'enzyme';
import Component from './Component';

describe('a component', () => {
  const wrapper = shallow(<Component />);

  it('should do something', () => {
    expect(wrapper.find(Component)).to.have.length(1);
  });
});
