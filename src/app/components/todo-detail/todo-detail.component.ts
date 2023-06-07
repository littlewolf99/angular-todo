import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { Todo } from '../../models/todos.model'

import { TodoService } from 'src/app/services/todos.service';

@Component({
    selector: 'app-todo-detail',
    templateUrl: './todo-detail.component.html',
})

export class TodoDetailComponent {
    constructor(
        private todoService: TodoService,
        private route: ActivatedRoute,
        private router: Router,
        ) {}
        
        todo? : Todo;

    ngOnInit(): void {
        this.todo = this.todoService.getTodo(this.route.snapshot.params['id']);
    }

    deleteTodo(todo: Todo): void {
        this.todoService.deleteTodo(todo);
        this.router.navigate(['todos']);
    }
}