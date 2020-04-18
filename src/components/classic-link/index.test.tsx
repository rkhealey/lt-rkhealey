import React from 'react';
import { shallow } from 'enzyme';
import ClassicLink from '.';

import { links, theme } from '../../mock-data';

describe('Classic Link', () => {
  it('Renders', () => {
    const wrapper = shallow(<ClassicLink {...links[0]} theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});
