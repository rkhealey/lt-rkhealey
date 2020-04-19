import React from 'react';
import { map } from 'lodash';
import { Box, Button, Flex, Text } from 'rebass/styled-components';
import Collapse from '../collapse';
import SongKickLogo from '../../images/songkick.svg';

interface ShowsLinkProps {
  title: string;
  theme: {
    background_color: string;
    text_color: string;
  };
  links: {
    date: string;
    venue: string;
    url: string;
    available: boolean;
  }[];
}

// @TODO add max height and scrollbar
const ShowsLink: React.FC<ShowsLinkProps> = ({ links, theme, title }) => (
  <Collapse title={title} theme={theme}>
    <Box
      px={3}
      pb={7}
      bg="grey_100"
      sx={{
        backgroundImage: `url(${SongKickLogo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left 50% bottom 32px',
      }}
    >
      {map(links, (link) => (
        <Flex
          py={3}
          key={link.url}
          alignItems="center"
          justifyContent="space-between"
          sx={{ borderBottom: '1px solid #e9ecee' }}
        >
          <Box>
            <Text>{link.date}</Text>
            <Text fontSize={0}>{link.venue}</Text>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            {link.available ? (
              <Button as="a" href={link.url} target="_blank" variant="transparent">
                <i className="material-icons">chevron_right</i>
              </Button>
            ) : (
              <Text fontSize={0}>Sold out</Text>
            )}
          </Box>
        </Flex>
      ))}
    </Box>
  </Collapse>
);

export default ShowsLink;
