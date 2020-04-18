import React from 'react';
import { Box } from 'rebass/styled-components';
import Avatar from '../avatar';

interface WrapperProps {
  username: string;
  imageSrc: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, imageSrc, username }) => (
  <Box variant="wrapper">
    <Avatar username={username} imageSrc={imageSrc} />
    {children}
  </Box>
);

export default Wrapper;
