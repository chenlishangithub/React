import React from 'react';
import {render} from 'react-dom';
import { AppContainer} from 'react-hot-loader'
import App from './pages/App'

function run() {
  render(
    <AppContainer>
      <div>
        <App></App>
      </div>
    </AppContainer>,
    document.getElementById('app'),
  );
}
run();