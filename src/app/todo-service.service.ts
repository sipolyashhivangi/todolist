// src/app/todo-service.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface TodoItem {
  id: number;
  name: string;
  completed: boolean;
  description: string;
  due_date: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  private readonly STORAGE_KEY = 'todos';
  private todosSubject: BehaviorSubject<TodoItem[]>;

  constructor() {
    const initialTodos = this.getTodos();
    this.todosSubject = new BehaviorSubject<TodoItem[]>(initialTodos);
  }

  get todos$(): Observable<TodoItem[]> {
    return this.todosSubject.asObservable();
  }

  getTodos(): TodoItem[] {
    const todosJson = localStorage.getItem(this.STORAGE_KEY);
    return todosJson ? JSON.parse(todosJson) : [];
  }

  // Save the full list to local storage
  saveTodos(todos: TodoItem[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
    this.todosSubject.next(todos);
  }

  // Add a new todo item
  addTodo(name: string, description: string, due_date: string): void {
    const todos = this.getTodos();
    const newTodo: TodoItem = {
      id: Date.now(), // Simple unique ID
      name,
      completed: false,
      description,
      due_date
    };
    todos.push(newTodo);
    this.saveTodos(todos);
  }

  // Update a todo item's completion status
  updateTodoStatus(id: number, completed: boolean): void {
    const todos = this.getTodos();
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      todos[index].completed = completed;
      this.saveTodos(todos);
    }
    this.todosSubject.next(todos);
  }

  // Add an edit method
  editTodo(updatedTodo: TodoItem): void {
    const todos = this.getTodos();
    const index = todos.findIndex(todo => todo.id === updatedTodo.id);
    if (index !== -1) {
      todos[index] = updatedTodo;
      this.saveTodos(todos);
    }
    this.todosSubject.next(todos);
  }

  // Delete a todo
  deleteTodo(id: number): void {
    const todos = this.getTodos().filter(todo => todo.id !== id);
    this.saveTodos(todos);
    this.todosSubject.next(todos); // Make sure to notify subscribers after deletion
  }
}