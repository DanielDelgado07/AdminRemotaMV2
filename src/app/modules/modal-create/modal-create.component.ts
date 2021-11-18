import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VirtualMachine } from 'src/app/model/VirtualMachine';


@Component({
  selector: 'app-modal-create',
  templateUrl: './modal-create.component.html',
  styleUrls: ['./modal-create.component.scss']
})
export class ModalCreateComponent implements OnInit {
  opSelectHD!:any;
 //acceso al DTO
 VirtualMachineDTO!: VirtualMachine;
  //Validaciones
    frmCrearMV!: FormGroup;
  //entradas
  disc1: any
  disc2: any
  disc3: any
  disc4: any
  //banderas
  disc1B: boolean = true;
  disc2B: boolean = true;
  disc3B: boolean = true;
  disc4B: boolean = true;

  constructor(private frm:FormBuilder) { 
    this.VirtualMachineDTO = new VirtualMachine();
  }

  ngOnInit(): void {
    this.validarCrearMV();
  }

  /*método que permite seleccionar 1 a 4 discos duros 
   para el almacenamiento de memoria en MB
  */
    chooseSelectHD(){
        if(this.opSelectHD =='disc0'){
          console.log("Entro a disc0")
            this.disc1B= true;
            this.disc2B= true;
            this.disc3B= true;
            this.disc4B= true;
        }
        if(this.opSelectHD=='disc1'){
            this.disc1B= false
            this.disc2B= true;
            this.disc3B= true;
            this.disc4B= true;
          
        }
        if(this.opSelectHD=='disc2'){
            this.disc1B= false
            this.disc2B= false;
            this.disc3B= true;
            this.disc4B= true;
        
        }
        if(this.opSelectHD=='disc3'){
            this.disc1B= false
            this.disc2B= false;
            this.disc3B= false;
            this.disc4B= true;
        
        }

        if(this.opSelectHD=='disc4'){
            this.disc1B= false
            this.disc2B= false;
            this.disc3B= false;
            this.disc4B= false;
        
        }
      }
  /*
   Método que se encargar de mandar a crear una MV 
   */
    crearMV(frmCrearMV:FormGroup){

    }
    /*
    Método que se encarga de validar la creación de una maquina virtual */
    validarCrearMV(){
      this.frmCrearMV =this.frm.group({
        nameMV:['',[Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z0-9]*')]],
        tamRAM:['',[Validators.required, Validators.maxLength(5), Validators.pattern('^[0-9]*$')]],
        tamHD:['',[Validators.required, Validators.maxLength(5), Validators.pattern('^[0-9]*$')]]
       
      })
    }
}
