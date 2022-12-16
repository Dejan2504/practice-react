import logo from './logo.svg';
import './App.css';
import Message from './component/Message';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Message />
    </Provider>
  );
}

export default App;
