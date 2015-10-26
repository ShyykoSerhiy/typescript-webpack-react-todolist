import {TodoItem} from '../model/TodoItem';

export enum TodoActionType{
    ADD,
    REMOVE
}

export interface TodoAction {
    type: TodoActionType;
    todo: TodoItem;
}

export function addTodoAction(text:string):TodoAction {
    return {
        type: TodoActionType.ADD,
        todo: {
            id: 0,
            todo: text
        }
    };
}

export function removeTodoAction(todo:TodoItem):TodoAction {
    return {
        type: TodoActionType.REMOVE,
        todo: todo
    };
}
