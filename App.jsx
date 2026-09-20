import React from 'react';

import HomeScreen from './src/screens/HomeScreen';
import {DeedProvider} from './src/context/DeedContext';


function App() {
  return (
    <DeedProvider>
      <HomeScreen />
    </DeedProvider>
  );
}


export default App;