import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
function App() {
  const dispatch = useDispatch();
  const {} = bindActionCreators(action)

  
  return (
    <div className="App">
      <div className="outer">
        <div className="number">1</div>
        <button className="btnAll">+</button>
        <button className="btnAll">0</button>
        <button className="btnAll">-</button>
      </div>
    </div>
  );
}

export default App;
