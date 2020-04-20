import React, { useState } from 'react';
import { get, find, map } from 'lodash';
import { Box } from 'rebass/styled-components';
import Collapse from '../collapse';
import Platform from './components/platform';
import SpotifyPlayer from './components/spotify-player';

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

const MusicPlayer: React.FC<MusicPlayerProps> = ({ artist, links, name, theme, title }) => {
  const [currentPlayer, setCurrentPlayer] = useState<string | null>(null);
  return (
    <Collapse title={title} theme={theme}>
      {/* @TODO switch out the players */}
      {currentPlayer === 'spotify' && (
        <SpotifyPlayer songTitle={name} artist={artist} songId={get(find(links, { id: 'spotify' }), 'songId', null)} />
      )}
      <Box bg="grey_100">
        {map(links, (link) => (
          <Platform key={link.url} {...link} name={link.platform} onLaunchPlayer={() => setCurrentPlayer(link.id)} />
        ))}
      </Box>
    </Collapse>
  );
};

export default MusicPlayer;
