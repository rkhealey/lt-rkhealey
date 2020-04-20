import React, { useState } from 'react';
import { kebabCase } from 'lodash';
import { Button, Flex, Image, Text } from 'rebass/styled-components';
import fetchImage from './fetch-image';

interface PlatformProps {
  name: string;
  url: string;
  songId: string;
}

const Platform: React.FC<PlatformProps> = ({ name, url }) => {
  const slug: string = kebabCase(name);
  const [logo, setLogo] = useState<string | null>(null);

  React.useEffect(() => {
    fetchImage(slug).then((img) => {
      setLogo(img);
    });
  }, []);
  if (!logo) {
    return null;
  }

  return (
    <Flex key={url} alignItems="center" justifyContent="space-between">
      <Flex px={3} alignItems="center">
        <Image src={logo} />
      </Flex>
      <Flex py={3} flex={1} alignItems="center" justifyContent="space-between" variant="withBorderBottom">
        <Text>{name}</Text>
        <Button mr={3} as="a" href={url} target="_blank" variant="transparent">
          <i className="material-icons">chevron_right</i>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Platform;
