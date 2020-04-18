import React from 'react';
import { Flex, Image, Text } from 'rebass/styled-components';

interface AvatarProps {
  username: string;
  imageSrc: string;
}

const Avatar: React.FC<AvatarProps> = ({ username, imageSrc }) => (
  <Flex flexDirection="column" alignItems="center" mb={5}>
    <Image src={imageSrc} alt={username} variant="avatar" mb={3} />
    <Text>{username}</Text>
  </Flex>
);

export default Avatar;
