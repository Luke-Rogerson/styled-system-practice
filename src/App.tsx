import React from 'react';
import { Box } from './Box';

export const App: React.FC = () => {
  return (
    <div>
      <Box width={[1, 1 / 2]} p={4} mb={3} backgroundColor='tomato' flex={1}>
        <p>This is a lovely responsive box</p>
      </Box>
    </div>
  );
};
