import './App.css';
import store from './store/store';
import { Provider }from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>1234</h1>
      </div>
    </Provider>
  );
}

export default App;
