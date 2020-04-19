import React from 'react';
import ShowsLink from '.';
import Wrapper from '../wrapper';

import { user, theme, showLinks } from '../../mock-data';

export default {
  title: 'with Shows Link',
};

export const Shows: React.FC = () => (
  <Wrapper {...user}>
    <ShowsLink theme={theme} {...showLinks} />
  </Wrapper>
);
