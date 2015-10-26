import {createStore, combineReducers} from 'redux';
import {todos} from '../reducers/todos';

export function configureStore() {
    const store = createStore(combineReducers({todos}));
    return store;
}
