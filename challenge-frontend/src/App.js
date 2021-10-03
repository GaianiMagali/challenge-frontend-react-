import React from 'react';
import { AppRouter } from './routes/AppRouter';
import {routes} from './routes/routes';

export const App = () => {
  
  return (
    <div className="App">
      <AppRouter routes = {routes}/>
    </div>
  )
}
