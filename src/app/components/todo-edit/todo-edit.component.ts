import { Component } from '@angular/core'
import { Router,ActivatedRoute } from '@angular/router'

import { TodoService } from 'src/app/services/todos.service'
import { Todo } from '../../models/todos.model'

@Component({
    selector: 'app-todo-edit',
    templateUrl: './todo-edit.component.html',
})

export class TodoEditComponent {
 constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
 ) {}

 todo: Todo = {
    id: '',
    title: '',
    detail: '',
    completed: false,
 }
    
 ngOnInit(): void {
    this.todo = {
      ...this.todoService.getTodo(this.route.snapshot.params['id']),
    };
  }

  onSubmit(): void {
    if(this.todo.id) this.todoService.updateTodo(this.todo);
    else this.todoService.addTodo(this.todo);
    this.router.navigate(['todos'])
  }

}