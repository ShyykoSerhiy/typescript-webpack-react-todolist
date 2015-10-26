/// <reference path='../../typings/tsd.d.ts' />

import {TodoActionType, removeTodoAction, addTodoAction} from '../../src/actions/todoActions'
import {expect} from 'chai';

describe('actions', () => {
    it('should create add todo action', () => {
        const todoText = 'Todo text';
        const expected = {
            type: TodoActionType.ADD,
            todo: {
                id: 0,
                todo: todoText
            }
        };
        expect(addTodoAction(todoText)).to.deep.equal(expected);
    });

    it('should create remove todo action', () => {
        const todoItem = {
            id: 1,
            todo: 'Todo text'
        };
        const expected = {
            type: TodoActionType.REMOVE,
            todo: todoItem
        };

        expect(removeTodoAction(todoItem)).to.deep.equal(expected);
    });
});