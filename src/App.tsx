import React from 'react';
import { Box } from './Box/Box';
import { Heading, Paragraph } from './Spacing/SpaceProps';

export const App: React.FC = () => {
  return (
    <>
      <div>
        <Box width={[1, 1 / 2]} p={4} mb={3} backgroundColor='tomato' flex={1}>
          <Heading>Hello</Heading>
          <Paragraph mt={0} mb={4}>
            This is a lovely responsive box
          </Paragraph>
        </Box>
      </div>
    </>
  );
};
