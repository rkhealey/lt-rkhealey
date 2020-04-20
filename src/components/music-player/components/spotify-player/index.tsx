import React from 'react';
import { Box, Flex, Image, Text } from 'rebass/styled-components';
import PlayButton from '../../../../images/play-button.svg';

interface PlayerProps {
  songTitle: string;
  artist: string;
  songId: string | null;
}

// @TODO connect to Spotify API
const SpotifyPlayer: React.FC<PlayerProps> = ({ songTitle, artist }) => (
  <Flex bg="grey_100" p={3} alignItems="center" variant="withBorderBottom">
    <Box bg="grey_800" mr={3} height="64px" width="64px" />
    <Image src={PlayButton} mr={2} alt="play" />
    <Text>
      {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
      {songTitle} - {artist}
    </Text>
  </Flex>
);

export default SpotifyPlayer;
