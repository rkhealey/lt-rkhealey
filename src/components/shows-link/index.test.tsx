import React from 'react';
import { shallow } from 'enzyme';
import ShowsLink from '.';

import { theme, showLinks } from '../../mock-data';

describe('Shows Link', () => {
  it('Renders', () => {
    const wrapper = shallow(<ShowsLink theme={theme} {...showLinks} />);
    expect(wrapper).toMatchSnapshot();
  });
});
