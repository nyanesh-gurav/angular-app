import { ToastrService } from 'ngx-toastr';

export class TodosNotification{
    constructor(public toastr: ToastrService)
    {
        
    } 
    
    showSuccess(msg:string) {
        this.toastr.success(msg);
    }
    showError(msg:string) {
      this.toastr.error(msg, 'Oops!');
    }
    
    showWarning(msg:string) {
      this.toastr.warning(msg, 'Alert!');
    }
    
    showInfo(msg:string) {
      this.toastr.info(msg, 'Info');
    }
   
}