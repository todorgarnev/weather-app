import React from 'react';
import './App.scss';

import Day from './components/Days/Day/Day';
import * as requestsUtils from './shared/utils/requestsUtils';

const App = () => {
  requestsUtils.getCityWeather('Sofia');

  return (
    <div className="app">
      <input type="text" className="search-bar" />

      <Day />
    </div>
  );
}

export default App;
