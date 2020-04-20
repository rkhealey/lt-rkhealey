import React from 'react';
import { shallow } from 'enzyme';
import MusicPlayer from '.';

import { musicPlayer, theme } from '../../mock-data';

describe('Music Player', () => {
  it('Renders', () => {
    const wrapper = shallow(<MusicPlayer {...musicPlayer} theme={theme} />);
    expect(wrapper).toMatchSnapshot();
  });
});
