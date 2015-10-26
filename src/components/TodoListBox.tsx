/// <reference path="../../typings/tsd.d.ts"/>

import {Table,TableRow,TableBody,TableFooter,TableHeader,TableHeaderColumn,TableRowColumn,RaisedButton,TextField,IconButton,Styles,ThemeWrapper} from 'material-ui';
import * as React from 'react';
import {connect} from 'react-redux';
import {TodoState} from '../reducers/todos';
import {TodoItem} from '../model/TodoItem';
import {TodoAction, removeTodoAction, addTodoAction} from '../actions/todoActions'

export interface ITodoListBoxProps extends React.Props<TodoListBox> {
    todos?: TodoItem[];
    dispatch?: (action:TodoAction)=>any
}

export interface ITodoListBoxState {
}

var theme = Styles.ThemeManager.getMuiTheme(Styles.DarkRawTheme);
@Styles.ThemeDecorator(theme)
@connect((state:TodoState) => (state.todos))
export class TodoListBox extends React.Component<ITodoListBoxProps, ITodoListBoxState> {
    constructor() {
        super();
    }

    onRowSelection(selectedRows:number[]|string) {
        var todos:TodoItem[];
        if (selectedRows === 'all') {
            todos = this.props.todos;
        } else {
            todos = (selectedRows as number[]).map(number=>this.props.todos[number]);
        }
        todos.forEach(item=>this.props.dispatch(removeTodoAction(item)));
    }

    onAddTodoClick() {
        this.props.dispatch(addTodoAction((this.refs['todoInput'] as TextField).getValue()));
    }

    render() {
        return (
            <Table
                height={'400px'}
                fixedHeader={true}
                fixedFooter={true}
                selectable={true}
                multiSelectable={true}
                onRowSelection={this.onRowSelection.bind(this)}>
                <TableHeader enableSelectAll={true}>
                    <TableRow>
                        <TableHeaderColumn colSpan={2} tooltip='Awesome todos'>
                            Todos
                        </TableHeaderColumn>
                    </TableRow>
                    <TableRow>
                        <TableHeaderColumn tooltip='The ID'>ID</TableHeaderColumn>
                        <TableHeaderColumn tooltip='The Name'>Name</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    deselectOnClickaway={true}
                    showRowHover={true}
                    stripedRows={true}>
                    {this.getTodoRows()}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableRowColumn>ID</TableRowColumn>
                        <TableRowColumn >Name</TableRowColumn>
                    </TableRow>
                    <TableRow>
                        <TableRowColumn >
                            <TextField
                                ref="todoInput"
                                hintText="Todo text"
                                onEnterKeyDown={this.onAddTodoClick.bind(this)}
                                floatingLabelText="Add new todo"/>
                        </TableRowColumn>
                        <TableRowColumn>
                            <RaisedButton label="Add todo" primary={true} onClick={this.onAddTodoClick.bind(this)}/>
                        </TableRowColumn>
                    </TableRow>
                </TableFooter>
            </Table>
        );
    }

    private getTodoRows() {
        return this.props.todos.map((todo, index) => {
            return <TableRow key={todo.id}>
                <TableRowColumn>{todo.id}</TableRowColumn>
                <TableRowColumn>{todo.todo}</TableRowColumn>
            </TableRow>;
        });
    }
}
