import React from 'react';
import './global.css';
import RootNavigation from '@/navigations/RootNavigation';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from '@/api/queryClient';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootNavigation />
    </QueryClientProvider>
  );
}

export default App;
