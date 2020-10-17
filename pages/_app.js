import "./_app.css";
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers'
import {createStore, applyMiddleware} from 'redux'

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default function App({Component}) {

  return (
    <Provider store={store}>
      <Component />
    </Provider>
  )
};

