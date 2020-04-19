import React from 'react';
import { Flex } from 'rebass/styled-components';
import Avatar from '../avatar';

interface WrapperProps {
  username: string;
  imageSrc: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, imageSrc, username }) => (
  <Flex variant="wrapper">
    <Avatar username={username} imageSrc={imageSrc} />
    {children}
  </Flex>
);

export default Wrapper;
