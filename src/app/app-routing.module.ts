import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component'
import { TodoEditComponent } from './components/todo-edit/todo-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full'},
  { path: 'todos', component: TodoListComponent},
  { path: 'todos/add', component: TodoEditComponent },
  { path: 'todos/:id', component: TodoDetailComponent},
  { path: 'todos/edit/:id', component: TodoEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
