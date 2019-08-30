import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelComeComponent } from './wel-come/wel-come.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { TodosLIstComponent } from './todos-list/todos-list.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"welcome/:name",component:WelComeComponent,canActivate:[RouteGuardService]},
  {path:'list/:name',component:TodosLIstComponent,canActivate:[RouteGuardService]},
  {path:'list/:id',component:UpdateComponent,canActivate:[RouteGuardService]},
  
  {path:'logout',component:LogoutComponent},
  {path:'**',component:ErrorMessageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
