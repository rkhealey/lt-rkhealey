import React from 'react';
import { map } from 'lodash';
import { Box, Button } from 'rebass/styled-components';
import Avatar from '../avatar';

interface ClassicLinkProps {
  username: string;
  imageSrc: string;
  links: {
    text: string;
    url: string;
  }[];
}

const ClassicLink: React.FC<ClassicLinkProps> = ({ imageSrc, links, username }) => (
  <Box variant="wrapper">
    <Avatar username={username} imageSrc={imageSrc} />
    {map(links, (link) => (
      <Button key={link.url} as="a" href={link.url} variant="block" mb={3}>
        {link.text}
      </Button>
    ))}
  </Box>
);

export default ClassicLink;
