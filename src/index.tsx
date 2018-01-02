import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore } from 'redux';
import { timerReducer } from './reducers/timer';
import { TimerState } from './reducers/timer';
import Timer from './containers/Timer';
import { Provider } from 'react-redux';

const store = createStore<TimerState>(timerReducer, {
  currentSeconds:0,
  currentMilis: 0,
  
});
ReactDOM.render(
  <Provider store={store}>
    <Timer />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
