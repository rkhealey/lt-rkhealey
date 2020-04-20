import React from 'react';
import MusicPlayer from '.';
import Wrapper from '../wrapper';

import { user, theme, musicPlayer } from '../../mock-data';

export default {
  title: 'with Music Player',
};

export const Music: React.FC = () => (
  <Wrapper {...user}>
    <MusicPlayer theme={theme} {...musicPlayer} />
  </Wrapper>
);
