import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TodosModel } from '../model/todo-model';
import { TodoServiceService } from 'src/app/service/data/todo-service.service';

@Component({
  selector: 'app-update-dialog-box',
  templateUrl: './update-dialog-box.component.html',
  styleUrls: ['./update-dialog-box.component.css']
})
export class UpdateDialogBoxComponent implements OnInit {
todo:TodosModel
updatedResponse:string;
  constructor(private todoService: TodoServiceService,
    public dialogRef: MatDialogRef<UpdateDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.todo = new TodosModel();
    this.todoService.retriveTodosById(this.data.id).subscribe(response => {
      this.todo = response

    });
  }
  onSaveClick(todo) {
    this.todoService.saveTodos(todo).subscribe(response => {
      this.updatedResponse = `${response} ${todo.id}`;
      this.dialogRef.close(response);
    });
   
}
onCancelClick(){
  this.dialogRef.close(false);
}
onNoClick(){
  this.dialogRef.close(false);
}
}
