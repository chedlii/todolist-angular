import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from "../../models/todo"

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {



  @Input() todo: Todo
  @Output() deleteTodo = new EventEmitter<Todo>()
  @Output() updateTodo = new EventEmitter<Todo>()
  @Output() changeClass = new EventEmitter<Todo>()

  constructor() { }

  ngOnInit() {

  }

  // set css classes dynamically with ngClass directive
  setClasses() {
    return {
      'done': this.todo.completed
    }

  }

  change(todo: Todo) {

    this.changeClass.emit(todo)



  }


  delete(todo: Todo) {

    console.log("todo deleted")

    this.deleteTodo.emit(todo)



  }

  update(todo: Todo) {

    this.updateTodo.emit(todo)


  }

}
