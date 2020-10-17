import "./_app.css";
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers'
import {createStore, applyMiddleware} from 'redux'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100vh;
    width: 100vw;
    margin: 0px;
  }

  body {
    height: 100%;
    width: 100%;
    margin: 0px;
    overflow-x: hidden;
  }
`

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default function App({Component}) {

  return (
    <>
      <GlobalStyle />
        <Provider store={store}>
          <Component />
        </Provider>
    </>
    
  )
};

