import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'rebass/styled-components';
import Collapse from '.';

import { theme } from '../../mock-data';

describe('Collapse', () => {
  it('Renders', () => {
    const wrapper = shallow(
      <Collapse theme={theme} title="Foo">
        Content
      </Collapse>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Hides and shows the content', () => {
    const wrapper = shallow(
      <Collapse theme={theme} title="Foo">
        <p className="the-content">Content</p>
      </Collapse>,
    );
    expect(wrapper.find('.the-content')).toHaveLength(0);
    wrapper.find(Button).simulate('click');
    expect(wrapper.find('.the-content')).toHaveLength(1);
  });
});
