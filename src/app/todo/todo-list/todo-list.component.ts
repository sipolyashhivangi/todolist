import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoItem, TodoServiceService } from 'src/app/todo-service.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  pendingtodos$!: Observable<TodoItem[]>;
  donetodos$!: Observable<TodoItem[]>;
  todo = []
  done = []
  constructor(public dialog: MatDialog, private todoService: TodoServiceService){

  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  alert(message:any){

  }

  openDialog() {
    const dialogRef = this.dialog.open(TodoFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.todoService.addTodo(result.name, result.description, result.due_date)
      this.fetchData()
    });
  }

  updateStatus(id:number, event: any){
    this.todoService.updateTodoStatus(id, event.checked)
    this.fetchData()
  }

  ngOnInit(){
    this.fetchData()
  }

  fetchData(){
    this.pendingtodos$ = this.todoService.todos$.pipe(
      map(todos => {
        return todos.filter(todo => !todo.completed)
      })
    )
    this.donetodos$ = this.todoService.todos$.pipe(
      map(todos => {
        return todos.filter(todo => todo.completed)
      })
    )
  }

}
