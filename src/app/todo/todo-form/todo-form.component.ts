// src/app/todo/todo-form/todo-form.component.ts
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog'; // Import MAT_DIALOG_DATA
import { TodoItem } from 'src/app/todo-service.service'; // Import TodoItem

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  todoForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    due_date: new FormControl('', [Validators.required]),
     completed: new FormControl(false)
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: { todo: TodoItem }) { } // Inject data

  ngOnInit(): void {
    if (this.data && this.data.todo) { // If a todo item is passed, populate the form
      this.todoForm.patchValue({
        name: this.data.todo.name,
        description: this.data.todo.description,
        due_date: this.data.todo.due_date,
        completed: this.data.todo.completed 
      });
    }
  }
}