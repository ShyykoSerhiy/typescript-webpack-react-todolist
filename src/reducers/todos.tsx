import {TodoAction, TodoActionType} from "../actions/todoActions";
import {TodoItem} from "../model/TodoItem";

var initState = localStorage.getItem('todosState');
initState = initState ? JSON.parse(initState) : {todos: [{id: 0, todo: 'Type with TypeScript'}]};

export interface TodoState {
    todos: TodoItem[];
}

export function todos(state:TodoState = initState, action:TodoAction = null):TodoState {
    if (!action) {
        console.warn('Invalid action', action);
        return state;
    }
    switch (action.type) {
        case TodoActionType.ADD:
            state = {todos: [...state.todos, Object.assign({}, action.todo, {id: state.todos.reduce((prV, cV) => Math.max(prV, cV.id), 0) + 1})]};
            break;
        case TodoActionType.REMOVE:
            state = {todos: [...state.todos.filter((todo => todo.id !== action.todo.id))]};
            break;
        default:
            console.warn('Unknown action', action);
    }

    window.localStorage.setItem('todosState', JSON.stringify(state));
    return state;
}
