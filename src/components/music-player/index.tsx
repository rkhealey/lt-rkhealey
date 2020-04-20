import React from 'react';
import { map } from 'lodash';
import { Box } from 'rebass/styled-components';
import Collapse from '../collapse';
import Platform from './components/platform';

interface MusicPlayerProps {
  title: string;
  artist: string;
  name: string;
  theme: {
    background_color: string;
    text_color: string;
  };
  links: {
    id: string;
    platform: string;
    url: string;
    songId: string;
  }[];
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ links, theme, title }) => {
  return (
    <Collapse title={title} theme={theme}>
      <Box bg="grey_100">
        {map(links, (link) => (
          <Platform key={link.url} {...link} name={link.platform} />
        ))}
      </Box>
    </Collapse>
  );
};

export default MusicPlayer;
