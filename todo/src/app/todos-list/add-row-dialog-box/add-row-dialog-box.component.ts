import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TodosModel } from '../model/todo-model';
import { TodoServiceService } from 'src/app/service/data/todo-service.service';
import { MaterialNotificationserviceService } from 'src/app/TodosNotification/material-notificationservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-row-dialog-box',
  templateUrl: './add-row-dialog-box.component.html',
  styleUrls: ['./add-row-dialog-box.component.css']
})
export class AddRowDialogBoxComponent implements OnInit {
  @ViewChild('todoForm',{static: false}) public todoForm:NgForm
  isDone:boolean[]=[true,false]
  constructor(private matNotificationservice:MaterialNotificationserviceService,
    private todoService: TodoServiceService,
    public dialogRef: MatDialogRef<AddRowDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  todo = new TodosModel();
  onNoClick(): void {
    this.dialogRef.close();
  }
  onSaveClick(todo,todoForm:NgForm) {
    console.log("Form Validation",todoForm);
    
    console.log("Object to save", todo.description);
    if (todo.description != undefined && todo.targetDate != undefined && todo.done != undefined)
     {
      this.todoService.saveTodosList(todo).subscribe(response => {
        this.dialogRef.close(response)
      });
    }
    else{

      this.matNotificationservice.error("Please Enter Data !");
    }
  }
  ngOnInit() {
    console.log("todosData",this.todoForm);
    
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
}
