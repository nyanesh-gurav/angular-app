import { Component, OnInit } from '@angular/core';
import { TodosModel } from './model/todo-model';
import { TodoServiceService } from '../service/data/todo-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AddRowDialogBoxComponent } from './add-row-dialog-box/add-row-dialog-box.component';
import { MatDialog } from '@angular/material';
import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog/delete-confirmation-dialog.component';
import { UpdateDialogBoxComponent } from './update-dialog-box/update-dialog-box.component';
import { TodosNotification } from '../TodosNotification/TodosNotification';
import { ToastrService } from 'ngx-toastr';
import { MaterialNotificationserviceService } from '../TodosNotification/material-notificationservice.service';
@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosLIstComponent implements OnInit {
 private noti:TodosNotification;
  todosArray: TodosModel[];
  todos = new TodosModel();
  message: string;
  name: string;
  selectedIdToDelete: number;
  updatedResponse:string;
  addedResponse:string;
  searchText="";
  constructor(private matNotificationservice:MaterialNotificationserviceService,
    private service: TodoServiceService, 
    private router: Router,
     public dialog: MatDialog, 
     private route: ActivatedRoute,
    toastr: ToastrService, ) { 
      this.noti = new TodosNotification(toastr);
    }

  ngOnInit() {
    this.retriveTodosList();
    this.name = this.route.snapshot.params['name'];
  }
  retriveTodosList() {
    this.service.retriveTodosList().subscribe(
      res => {
        this.todosArray = res
        console.log(this.todosArray);
      }
    );
  }
  
  onAddClick(): void {
    const dialogRef = this.dialog.open(AddRowDialogBoxComponent, {
      disableClose: true,
      width: '400px',
      // height: '420px',
      // data: {name: this.name, animal: this.animal}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.updatedResponse=null;
          // this.addedResponse=null;
          // this.message=null;
          this.matNotificationservice.success(" :: Record Saved Successfully")
          //  this.noti.showSuccess("Record Saved Successfully");
          //  this.noti.showError("Please enter valid data")
        this.retriveTodosList();
      }
    });
  }
  
  // Dialog Box for delete confirmation
  onDeleteClick(id): void {
    this.selectedIdToDelete=id;
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      disableClose: true,
      width: '300px',
      // data: {name: this.name, animal: this.animal}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.deleteTodosById(this.selectedIdToDelete).subscribe(response => {
          this.updatedResponse=null;
          this.addedResponse=null;
          
          this.matNotificationservice.success(`Delete of todos id ${this.selectedIdToDelete} successfully`)
          // this.message = `Delete of todos id ${this.selectedIdToDelete} successfully`;
          this.retriveTodosList();
        });
      }
    });
  }
  // Dialog Box for Uodate Record 
  id:number;
  onUpdateClick(id): void {
    const dialogRef = this.dialog.open(UpdateDialogBoxComponent, {
      disableClose: true,
      width: '300px',
       data: {id:id}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.message=null;
        this.matNotificationservice.success(`${result} ${id}`);
        // this.updatedResponse = `${result} ${id}`;
      }
      this.retriveTodosList();
    });
  }
}
