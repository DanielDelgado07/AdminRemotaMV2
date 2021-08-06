import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { SideBarChangesNamesService } from 'src/app/services/side-bar-changes-names.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginUsuarioDTO!: User;
  

  constructor(private route: Router,
    private _userService: UserService,
    private _servicioCambioNombre: SideBarChangesNamesService,
    private toastr: ToastrService
    ) { 
    this.loginUsuarioDTO = new User();
   
  }

  ngOnInit(): void {

   // this.ObtenerUserLogin();
  }

  login(frmLogin: NgForm){
    this.obtenerUserLogin(this.loginUsuarioDTO, frmLogin);
    //this.route.navigate(['dashboard']);
  }

   obtenerUserLogin(bodyUser:User, f: NgForm){
    this._userService.getLoginUser(bodyUser).subscribe(data =>{
      if(data){
        // console.log(data.username);
         //console.log(data.role);
          this._servicioCambioNombre.nameUser= data.username;
          this._servicioCambioNombre.roleUser= data.role;

           this.toastr.success('Se ha logueado con exito!', 'Login exitoso');
          
          f.reset();
        
           this.route.navigate(['default']);
       
      }else{
           this.toastr.error('Su login ha fallado!', 'Login fallido');
        f.reset();
      }
     
     }, error =>{
      this.toastr.error('Problemas con el servidor!', 'Servidor fallido');
     });
   }
}
