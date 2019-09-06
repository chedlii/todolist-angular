import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input() test: string


  todos: Todo[]
  titleForUpdate: string


  constructor() { }

  ngOnInit() {

    this.todos = [

      {
        id: 1,
        title: "todo one",
        completed: false


      },
      {
        id: 2,
        title: "todo two",
        completed: true


      }



    ]


  }
  onChangeClass(todo: Todo) {

    todo.completed = !todo.completed
    console.log(todo)
  }

  onDelete(todo: Todo) {

    this.todos = this.todos.filter(el => el.id !== todo.id)
  }

  onUpdate(todo: Todo) {


    this.todos = this.todos.filter(el => el.id !== todo.id)

    this.titleForUpdate = todo.title




  }

  addTodo(todo) {

    let { todos } = this
    let arr1 = todos.splice(todos.indexOf(todo) + 1, todos.length)
    let arr2 = todos.slice(0, todos.indexOf(todo) - 1)
    this.todos = this.todos.slice(0, 0).concat(arr2, todo, arr1)

    console.log(this.todos.indexOf(todo))
  }

}
