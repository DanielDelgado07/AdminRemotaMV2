import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { UserComponent } from './modules/user/user.component';


const routes: Routes = [
  {
    path:'',
    component: DefaultComponent,
    children:[
      {
      path:'',
    component:  DashboardComponent,
      },
      {
        path: 'usuario',
        component: UserComponent
      } 
  ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
