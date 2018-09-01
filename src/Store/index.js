import { createStore, applyMiddleware, compose } from 'redux';
import initialStore from './initialStore';
import reducer from './reducers';
import thunk from 'redux-thunk';
  
const store = createStore(reducer, 
    initialStore, 
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      )
);

export default store;