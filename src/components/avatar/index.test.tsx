import React from 'react';
import { shallow } from 'enzyme';
import Avatar from '.';

import { user } from '../../mock-data';

describe('Avatar', () => {
  it('Renders', () => {
    const wrapper = shallow(<Avatar {...user} />);
    expect(wrapper).toMatchSnapshot();
  });
});
