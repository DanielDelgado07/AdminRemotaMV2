import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default/default.component';
import { DashboardComponent } from '../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from '../modules/user/user.component';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { ComandosComponent } from '../modules/comandos/comandos.component';






@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    UserComponent,
    ComandosComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,// importacion del modulo router 
    SharedModule,
    MatSidenavModule,
    MatDividerModule
    
    
  ]
})
export class DefaultModule { }
