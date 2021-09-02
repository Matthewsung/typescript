import React from 'react';
import './App.css';

// import { Provider } from 'react-redux'
// import {store} from './state/index'

function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      <div className="outer">
        <div className="number">1</div>
        <button className="btnAll">+</button>
        <button className="btnAll">0</button>
        <button className="btnAll">-</button>
      </div>
    </div>
    // </Provider>
  );
}

export default App;
