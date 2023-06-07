import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Todo } from 'src/app/models/todos.model';
import { TodoService  } from 'src/app/services/todos.service';

@Component({
    selector:'app-todo-list',
    templateUrl:'./todo-list.component.html',
})

export class TodoListComponent {
    title: string = 'Todo List';
    todos? : Todo[];

    constructor(
        private todoService: TodoService,
        private route: ActivatedRoute,
        private router:Router,
    ) {}

    ngOnInit(): void {
        this.todos = this.todoService.getTodos();
    }

}