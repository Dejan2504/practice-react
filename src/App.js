import Word from './component/Word';
import './App.css';
import Message from './component/Message';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Message />
      <Word />
    </Provider>
  );
}

export default App;
