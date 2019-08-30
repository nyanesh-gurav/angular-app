import { Injectable } from '@angular/core';
import { TodosModel } from 'src/app/todos-list/model/todo-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
baseUrl="http://localhost:8080/"
  constructor(private http:HttpClient) { }
  retriveTodosList(){
    return this.http.get<TodosModel[]>(`${this.baseUrl}/getAllTodoList`);
  }
  deleteTodosById(id){
    return this.http.delete(`${this.baseUrl}/deleteTodos/${id}`,{ responseType: 'text' })
  }
  retriveTodosById(id){
    return this.http.get<TodosModel>(`${this.baseUrl}/getTodo/${id}`)
  }
  saveTodos(todo:TodosModel){
    return this.http.put(`${this.baseUrl}/saveTodos`,todo,{ responseType: 'text' });
  }
  saveTodosList(todo:TodosModel){
    return this.http.post(`${this.baseUrl}/saveTodos`,todo,{ responseType: 'text' });
  }
}
 