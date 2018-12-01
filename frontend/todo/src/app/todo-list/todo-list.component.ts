import { Component, OnInit } from '@angular/core';

export class Task {
  constructor(
    public id: number,
    public description: string,
    public complete: boolean,
    public targetDate: Date
    ) {

    }
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks = [
    new Task(1, 'Learn Angular', false, new Date()),
    new Task(2, 'Learn Spring Boot', false, new Date()),
    new Task(3, 'Launch a full stack app', false, new Date()),
    // {id : 1, description : 'Learn Angular'},
    // {id : 2, description : 'Learn Spring Boot'},
    // {id : 3, description : 'Launch a full stack app'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
