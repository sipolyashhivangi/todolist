// src/app/todo/todo-list/todo-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
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
  todo: TodoItem[] = []; // Initialize as empty array of TodoItem
  done: TodoItem[] = []; // Initialize as empty array of TodoItem

  constructor(public dialog: MatDialog, private todoService: TodoServiceService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.pendingtodos$ = this.todoService.todos$.pipe(
      map(todos => {
        // Update the local 'todo' array for drag and drop
        this.todo = todos.filter(todo => !todo.completed);
        return this.todo;
      })
    );
    this.donetodos$ = this.todoService.todos$.pipe(
      map(todos => {
        // Update the local 'done' array for drag and drop
        this.done = todos.filter(todo => todo.completed);
        return this.done;
      })
    );
  }

  drop(event: CdkDragDrop<TodoItem[]>) { // Specify type for event.container.data
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      // Update status based on the target list
      const droppedItem = event.container.data[event.currentIndex];
      this.todoService.updateTodoStatus(droppedItem.id, event.container.id === 'doneList');
      this.fetchData(); // Re-fetch data to ensure UI is in sync after drag-and-drop
    }
  }

  openAddTodoDialog() { // Renamed for clarity
    const dialogRef = this.dialog.open(TodoFormComponent, {
      data: { todo: null } // Pass null for adding a new todo
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { // Only add if result is not null (i.e., Add button was clicked)
        this.todoService.addTodo(result.name, result.description, result.due_date);
        this.fetchData();
      }
    });
  }

  openEditTodoDialog(todoItem: TodoItem) { // New method for editing
    const dialogRef = this.dialog.open(TodoFormComponent, {
      data: { todo: todoItem } // Pass the existing todo item for editing
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { // Only edit if result is not null
        this.todoService.editTodo({ ...todoItem, ...result }); // Merge updated values
        this.fetchData();
      }
    });
  }

  deleteTodo(id: number) { // New method for deleting
    if (confirm('Are you sure you want to delete this todo?')) {
      this.todoService.deleteTodo(id);
      this.fetchData(); // Re-fetch data after deletion
    }
  }

  updateStatus(id: number, event: any) {
    this.todoService.updateTodoStatus(id, event.checked);
    this.fetchData();
  }
}