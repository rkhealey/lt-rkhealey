import React from 'react';
import ClassicLink from '.';

import { user, links } from '../../mock-data';

export default {
  title: 'Classic Link',
};

export const Classic: React.FC = () => <ClassicLink {...user} links={links} />;
