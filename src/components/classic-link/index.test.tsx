import React from 'react';
import { shallow } from 'enzyme';
import ClassicLink from '.';

import { user, links } from '../../mock-data';

describe('Classic Link', () => {
  it('Renders', () => {
    const wrapper = shallow(<ClassicLink {...user} links={links} />);
    expect(wrapper).toMatchSnapshot();
  });
});
