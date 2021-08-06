import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


const routes: Routes = [
  
  { 
    path: '', 
    pathMatch:'full',
    redirectTo: 'login'
  },
  // {
  //   path:'comandos',
  //   component:ComandosComponent
  // },
  
  {
   // path: 'login',
   // component: LoginComponent,
   
   path:'login',
   component:LoginComponent,
                              //   path:'',
                              //  component: DefaultComponent,
                              //   children:[{
                              //     path:'',
                              //      component:  DashboardComponent,
                              //     },
                              //      {
                              //       path: 'usuario',
                              //       component: UserComponent
                              //      }
                              //   ]
    // },
    // {  
    //   path:'',
    //    pathMatch:'full',
    //    redirectTo: 'login'
           },//,
           {
             path:'default',
             loadChildren:() => import('./modules/modules.module').then(m =>m.ModulesModule)
           },
    //  {
    //    path: 'dashboard',
    //    loadChildren:() => import('./modules/modules.module').then(m => m.ModulesModule)
    //   },
      // {
      //   path:'',
      //   pathMatch:'full',
      //   redirectTo: 'login'
      // },
      {
        path: '**',
        component: NotFoundComponent
      }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
