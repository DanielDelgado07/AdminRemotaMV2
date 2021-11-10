import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/model/user';
import { SideBarChangesNamesService } from 'src/app/services/side-bar-changes-names.service';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 // canDisableAll: boolean = false;
  registerUserDTO!: User;
  frmUsuario!: FormGroup;
  rolLabel: string="";
  someVar: string = "";

  constructor(private  frm:FormBuilder, 
              private _userService: UserService,
              private _sideBarNameChange: SideBarChangesNamesService,
              private toastr: ToastrService
  ) {
      this.someVar=this._sideBarNameChange.roleUser;
     // console.log("Esto es someVar ",this.someVar);
        this.registerUserDTO = new User();
    }

  ngOnInit(){
   
     
   this.validarUsuario();
 
  }
  
  // Método que se encarga de seleccionar el rol del usuario que se desea crear
  selectRolUsuario(rol: string){
    console.log(rol);
    if(rol=='Administrador'){
     this.rolLabel="Administrador";
    }else{
      this.rolLabel="Auxiliar";
    }
  }

  //Método que se encarga de validar que el usuario sea un administrador para poder crear el usuario,
  //con un mensaje de alerta que  que muestra una ventana emergente donde indica la advertencia
  crearUsuario(frmUsuario:FormGroup){
   //  console.log(this.frmUsuario);
   
    if(this.someVar=='Administrador'){
      this.createUserNew(this.registerUserDTO, frmUsuario);
      
    }else{
     
         this.toastr.error('Eres auxilar, solo se permite el registro por el Administrador.','Registro no posible');
    
    }
 
  }
  
  //Metodo que se encarga de crear el nuevo usuario haciendo uso del subscribe y de las validaciones
  // que se llevan en el subscribe 
  createUserNew(bodyUser:User, f:FormGroup){
      this._userService.registerUser(bodyUser).subscribe(data=>
        {
         if(data){
            this.toastr.success('Se ha registrado con exito.','Registro exitoso!')
            f.reset();
          }else{
            this.toastr.error('Este registro ya existe.','Registro fallido!');
            f.reset();
          }
        
        },
         error =>{
          console.log(error);
         });
  }

  //Metodo que se encarga de validar a el usuario que cumpla con unos criterios de validación
  validarUsuario() {
    this.frmUsuario =  this.frm.group({
      userNameColaborador: ['',[Validators.required, Validators.minLength(3),]],
      passwordUser: ['',[Validators.required, Validators.minLength(3)]],
      rolUsuario:['Auxiliar']
       
    });

    if(this.someVar == 'Administrador'){
      
         
       this.frmUsuario.enable();
      //  this.frmUsuario.controls.userNameColaborador.disable();
      //  this.frmUsuario.controls.passwordUser.disable();
      //  this.frmUsuario.controls.rolUsuario.disable();
    }
    else{
       this.frmUsuario.disable();
       
      }
    }
    
   
  
}
