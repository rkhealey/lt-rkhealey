import React, { useState } from 'react';
import { Button, Box } from 'rebass/styled-components';
import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  from {
    transform: scale(1, 0);
  }

  to {
    transform: scale(1, 1);
  }
`;

const Content = styled(Box)`
  &.isOpen {
    animation: ${slideDown} 0.25s ease;
  }
`;

interface CollapseProps {
  title: string;
  theme: {
    background_color: string;
    text_color: string;
  };
}

const Collapse: React.FC<CollapseProps> = ({ children, theme, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box mb={3}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="block"
        sx={{
          backgroundColor: theme.background_color,
          color: theme.text_color,
          ':hover': {
            backgroundColor: theme.text_color,
            color: theme.background_color,
          },
        }}
      >
        {title}
      </Button>
      {isOpen && (
        <Content variant="collapse" className={isOpen ? 'isOpen' : ''}>
          {children}
        </Content>
      )}
    </Box>
  );
};

export default Collapse;
