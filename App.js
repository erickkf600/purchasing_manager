import React from 'react';
import Routing from './src/router-config/Routing'
import { StatusBar } from 'react-native';
import { ActiveIndexProvider } from './src/providers/routeContext'
import { ActiveRouteProvider } from './src/providers/route-props'

const App = () => {
  return (
      <ActiveRouteProvider>
        <ActiveIndexProvider>
            <StatusBar backgroundColor='#e8e8e8' barStyle="dark-content"/>
            <Routing />
        </ActiveIndexProvider>
      </ActiveRouteProvider>
  );
};

export default App;
