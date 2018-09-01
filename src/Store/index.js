import { createStore } from 'redux';
import initialStore from './initialStore';
import reducer from './reducers';

const store = createStore(reducer, 
    initialStore, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;