import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from 'src/app/todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTasks(username) {
    return this.http.get<Task[]>(`http://localhost:8080/users/${username}/tasks`);
    // console.log("Execute Hello World Bean Service");
  }

}
