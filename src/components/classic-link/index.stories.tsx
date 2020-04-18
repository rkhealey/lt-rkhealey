import React from 'react';
import { map } from 'lodash';
import ClassicLink from '.';
import Wrapper from '../wrapper';

import { user, links, theme } from '../../mock-data';

export default {
  title: 'with Classic Links',
};

export const Classic: React.FC = () => (
  <Wrapper {...user}>
    {map(links, (link) => (
      <ClassicLink theme={theme} {...link} />
    ))}
  </Wrapper>
);
