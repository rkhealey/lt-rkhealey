import React from 'react';
import { Button } from 'rebass/styled-components';

interface ClassicLinkProps {
  text: string;
  url: string;
  theme: {
    background_color: string;
    text_color: string;
  };
}

const ClassicLink: React.FC<ClassicLinkProps> = ({ text, theme, url }) => (
  <Button as="a" href={url} target="_blank" variant="block" mb={3}>
    {text}
  </Button>
);

export default ClassicLink;
