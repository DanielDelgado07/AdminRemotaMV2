import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from '../layouts/default/default.component';
import { UserComponent } from './user/user.component';
import { ComandosComponent } from './comandos/comandos.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children:[{
          path:'dashboard',
           component:  DashboardComponent,
          },
          {
            path:'usuario',
                component: UserComponent
          },
          {
            path:'comandos',
              component: ComandosComponent
          }
          // },
          //  {
          //   path: 'usuario',
          //   component: UserComponent
          //  }
        ]
      

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
