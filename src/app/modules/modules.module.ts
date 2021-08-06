import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { DefaultComponent } from '../layouts/default/default.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { ComandosComponent } from './comandos/comandos.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DefaultComponent,
    UserComponent,
    ComandosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatDividerModule,
    ModulesRoutingModule,
    RouterModule,
    SharedModule,
    
  ]
  
})
export class ModulesModule { }
