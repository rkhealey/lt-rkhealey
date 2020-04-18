import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from '.';

import { user } from '../../mock-data';

describe('Wrapper', () => {
  it('Renders', () => {
    const wrapper = shallow(
      <Wrapper {...user}>
        <p>Hello</p>
      </Wrapper>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
