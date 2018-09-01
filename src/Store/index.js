import { createStore } from 'redux';
import initialStore from './initialStore';

const store = createStore(state => state, 
    initialStore, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;