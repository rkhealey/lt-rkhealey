import React, { useState } from 'react';
import { Button, Flex, Image, Text } from 'rebass/styled-components';
import fetchImage from './fetch-image';

interface PlatformProps {
  id: string;
  name: string;
  onLaunchPlayer: () => void;
  songId: string;
  url: string;
}

const Platform: React.FC<PlatformProps> = ({ id, name, onLaunchPlayer, url }) => {
  const [logo, setLogo] = useState<string | null>(null);

  React.useEffect(() => {
    fetchImage(id).then((img) => {
      setLogo(img);
    });
  }, []);
  if (!logo) {
    return null;
  }

  return (
    <Flex key={url} alignItems="center" justifyContent="space-between">
      <Flex px={3} alignItems="center">
        <Button variant="transparent" as="a" href={url} target="_blank">
          <Image src={logo} />
        </Button>
      </Flex>
      <Flex py={3} flex={1} alignItems="center" justifyContent="space-between" variant="withBorderBottom">
        <Text>{name}</Text>
        <Button mr={3} onClick={onLaunchPlayer} variant="transparent">
          <i className="material-icons">chevron_right</i>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Platform;
