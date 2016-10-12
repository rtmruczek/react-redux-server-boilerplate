import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Component from '../src/Component';

describe('a component', () => {
  const wrapper = shallow(<Component />);

  it('should be rendered', () => {
    expect(wrapper.find('div')).to.have.length(1);
  });
});
