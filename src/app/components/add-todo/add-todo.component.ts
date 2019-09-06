import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Todo } from "../../models/todo";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Input() todos: []
  @Output() add = new EventEmitter<any>()
  @Input() titleForUpdate: string

  title: string

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {

    if (this.titleForUpdate === "") {
      const todo = {
        id: this.todos.length + 1,
        title: this.title,
        completed: false

      }

      this.add.emit(todo)
      this.title = ""
      this.titleForUpdate = ""
    }

    else {
      const todo = {
        id: this.todos.length + 1,
        title: this.titleForUpdate,
        completed: false

      }

      this.add.emit(todo)
      this.title = ""
      this.titleForUpdate = ""


    }

  }

}


