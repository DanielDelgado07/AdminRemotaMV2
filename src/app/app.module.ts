import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { DefaultModule } from './layouts/default.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './auth/login.module';

import { ModulesModule } from './modules/modules.module';




@NgModule({
  declarations: [
    AppComponent,
  
  
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    //DefaultModule,
    FormsModule,
    HttpClientModule,
    LoginModule,
    ModulesModule,
    ReactiveFormsModule,
    
    ToastrModule.forRoot({timeOut: 3000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
  }), // ToastrModule added
  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
