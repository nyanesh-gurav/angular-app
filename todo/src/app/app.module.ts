import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
//Search module for filter data
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelComeComponent } from './wel-come/wel-come.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { FormsModule }    from '@angular/forms';
import { TodosLIstComponent } from './todos-list/todos-list.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { AddRowDialogBoxComponent } from './todos-list/add-row-dialog-box/add-row-dialog-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCommanModule } from './material-comman/material-comman.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DeleteConfirmationDialogComponent } from './todos-list/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { UpdateDialogBoxComponent } from './todos-list/update-dialog-box/update-dialog-box.component';
import { CustomSearchPipePipe } from './CustomSearchPipe/custom-search-pipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelComeComponent,
    ErrorMessageComponent,
    TodosLIstComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    UpdateComponent,
    AddRowDialogBoxComponent,
    DeleteConfirmationDialogComponent,
    UpdateDialogBoxComponent,
    CustomSearchPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialCommanModule,
    Ng2SearchPipeModule ,
    AngularFontAwesomeModule,
	ToastrModule.forRoot()
   

  ],
  entryComponents: [AddRowDialogBoxComponent,
    UpdateDialogBoxComponent,DeleteConfirmationDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
