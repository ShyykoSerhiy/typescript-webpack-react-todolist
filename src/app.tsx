import * as React from 'react';
import {TodoListBox} from './components/TodoListBox';
import {configureStore} from './store/store';
import {Provider} from 'react-redux';

const store = configureStore();

React.render(
    <Provider store={store}>
        {()=><div className="demo">
            <div className="demo-row">
                <div className="center-padding"></div>
                <div className="center">
                    <TodoListBox></TodoListBox>
                </div>
                <div className="center-padding"></div>
            </div>
        </div>}
    </Provider>,
    document.getElementById('todoList')
);
