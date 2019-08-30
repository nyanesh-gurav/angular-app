import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MaterialNotificationserviceService {
config:MatSnackBarConfig={
  duration:3000,
  horizontalPosition:'right',
  verticalPosition:'top'
}
  constructor(public snackBar: MatSnackBar) { }
  success(msg) {
    this.config['panelClass']=['notification','success'];
    this.snackBar.open(msg, '',this.config)
  }
  warning(msg) {
    this.config['panelClass']=['notification','warning'];
    this.snackBar.open(msg, '',this.config)
  }
  error(msg) {
    this.config['panelClass']=['notification','error'];
    this.snackBar.open(msg, '',this.config)
  }
}
