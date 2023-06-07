import { Injectable } from '@angular/core'

import { Todo } from '../models/todos.model'

const baseUrl = 'api/todos';

@Injectable({
    providedIn: 'root',
})

export class TodoService {
    currentId = 4;
    todos: Todo[] = [
        {
            id:1,
            title: 'Study',
            detail: 'I have to study',
            completed: false,
        },
        {
            id:2,
            title: 'Play',
            detail: 'I have to play',
            completed: false,
        },
        {
            id:3,
            title: 'Jump',
            detail: 'I have to jump',
            completed: false,
        }
    ]

    getTodos() {
        return this.todos;
    }

    getTodo(id: any) {
        return this.todos.find((todo: Todo) => {
            return todo.id == id;
        });
    }

    addTodo(todo: Todo) {
        todo.id = this.currentId;
        this.currentId++;
        this.todos.push(todo);
    }

    updateTodo(todoItem: Todo) {
        const index: number = this.todos.findIndex((todo: Todo) => {
            return todo.id == todoItem.id;
        });

        this.todos[index] = todoItem;
    }

    deleteTodo(todo: Todo) {
        this.todos = [
            ...this.todos.filter((todoItem: Todo) => {
                return todoItem.id != todo.id;
            }),
        ];
    }

}