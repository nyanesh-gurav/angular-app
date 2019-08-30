import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../service/data/todo-service.service';
import { TodosModel } from '../todos-list/model/todo-model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  todo: TodosModel;
  id: number;
  updatedResponse: string;
  constructor(private route: ActivatedRoute,
    private todoService: TodoServiceService,
    public router: Router) { }


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new TodosModel();
    this.todoService.retriveTodosById(this.id).subscribe(response => {
      this.todo = response

    });
  }
  onSaveClick(todo) {
    this.todoService.saveTodos(todo).subscribe(response => {
      this.updatedResponse = `${response} ${todo.id}`;
      if(response !=undefined){
        this.router.navigate(['list']);
      }
    });

  }

}
