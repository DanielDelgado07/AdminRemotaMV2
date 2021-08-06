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
  
  
  selectRolUsuario(rol: string){
    console.log(rol);
    if(rol=='Administrador'){
     this.rolLabel="Administrador";
    }else{
      this.rolLabel="Auxiliar";
    }
  }

  crearUsuario(frmUsuario:FormGroup){
   //  console.log(this.frmUsuario);
   
    if(this.someVar=='Administrador'){
      this.createUserNew(this.registerUserDTO, frmUsuario);
      
    }else{
     
         this.toastr.error('Eres auxilar, solo se permite el registro por el Administrador.','Registro no posible');
    
    }
 
  }
  
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

  
  
  validarUsuario() {
    this.frmUsuario =  this.frm.group({
      userNameColaborador: ['',[Validators.required, Validators.minLength(3),]],
      passwordUser: ['',[Validators.required, Validators.minLength(3)]],
      rolUsuario:['Auxiliar']
       
    });

    if(this.someVar == 'Administrador'){
      
         
       //  this.frmUsuario.enable();
       
    }
    else{
       this.frmUsuario.disable();
       
      }
    }
    
   
  
}
