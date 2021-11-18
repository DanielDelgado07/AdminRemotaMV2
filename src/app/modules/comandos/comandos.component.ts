import { Component, OnInit } from '@angular/core';


import { ToastrService } from 'ngx-toastr';
import { Server } from 'src/app/model/server';
import { ServerService } from 'src/app/services/server.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalCreateComponent } from '../modal-create/modal-create.component';

@Component({
  selector: 'app-comandos',
  templateUrl: './comandos.component.html',
  styleUrls: ['./comandos.component.scss']
})
export class ComandosComponent implements OnInit {
  //arreglos
  checklist: any =[];
  checklistNew: any =[];
  checklistNew2: any= [];
  lsResultShowList: any = [];
  arrayCommands: any  =[];
  arregloFin: any =[];

  //entradas
  inputMV: any;
  cadena: any;
  masterSelected:boolean;
  opcionSeleccionado: string  = '0'; // Iniciamos
 

  //banderas
  enviarBandera = true;
  inputBandera = true;
  selectorIPBandera = true;
  butDisabled: boolean =true;

  
  
  //checklist:any;
  checkedList:any;
 
  constructor(private _serverService: ServerService,
              private toastr: ToastrService,
              private dialog: MatDialog) { 
    this.masterSelected= false;
    this.getCheckedItemList();
    this.checklist;
    this.checklist =[ 
    // {id: 1, hostName: "MacBook-Pro-de-Daniel.local", ipAddress: "192.168.0.17", port: 3401},
    // {id: 2, hostName: "Windows-de-Daniel.local", ipAddress: "192.168.0.18", port: 3401},
    // {id: 3, hostName: "Linux-de-Daniel.local", ipAddress: "192.168.0.19", port: 3401},
    // {id: 4, hostName: "Centus-de-Daniel.local", ipAddress: "192.168.0.20", port: 3401}
  ]
  this.checklist.map((re:any) => {re.checked =!false;});  
  }

  ngOnInit(): void {
    this.obtainListServerActive();
   
   
  }

  //obtener la lista de las direccioens ip de los servidores activos 
  obtainListServerActive(){
      this._serverService.getServerIpActive().subscribe(data=>{

        console.log(data);
        this.checklist= data;
        }, error=>{
        console.log(error);
      });
}



  
   
   
 
  // The master checkbox will check/ uncheck all items
  checkUncheckAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
      console.log(this.checklist[i])
    }
    this.selectorIPBandera = true;
    this.getCheckedItemList();
   
  }

  // Check All Checkbox Checked
  isAllSelected() {
    this.masterSelected = this.checklist.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }

  // Get List of Checked Items
  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if(this.checklist[i].isSelected){
        this.checkedList.push(this.checklist[i]);
        this.selectorIPBandera = false;
        
      }
     
    }
    
    this.checkedList = JSON.stringify(this.checkedList);
    console.log("->",this.checklist)
  }

  conectaServidor(){
    console.log("Estoy en conectarServidor");
    var j=0;
    this.checklistNew = [];
     
    for (var i = 0; i < this.checklist.length; i++) {
    // this.checklist[i].isSelected = this.masterSelected;
        
        if(this.checklist[i].isSelected == true){
          console.log("Dentro del if conectarServidor")
          
            this.checklistNew.push(this.checklist[i]);
           
             
           
          }
     }   console.log("----fsdfsf----->",this.checklistNew)
      // for (let index = 0; index < this.checklist.length; index++) {
      //     console.log("-,->",{port:this.checklist[index].port})
      //   this.checklistNew= JSON.stringify({ipAddress:this.checklist[index].ipAddress,port:this.checklist[index].port} )   
      //   this.checklistNew2.push(this.checklistNew[index]);
      // }
      // console.log("----->",this.checklistNew2)
      this.obtenerConexionServers(this.checklistNew);
      // this.sendMessage('show list');
      // this.logicMessage('show list');
      //this.capturarSelect();
      this.selectorIPBandera = true;
  }

  obtenerConexionServers(lsServer:Server[]){
      this._serverService.getConnect(lsServer).subscribe(data=>{

          this.toastr.success('Conexión exitosa.con el agente','Conexión Agente')
      
      },
       error =>{
        this.toastr.error('Fallo Conexión con el agente.','Fallo conexion!');
        
       });
  }
  // logicMessage(message:string){
  //   if(message=='show list'){
  //     console.log("---> shoe list");
  //     this.sendMessage(message);
  //   }
  // }
  //Se encarga de enviar los comandos al back
  sendMessage(message:string){
    console.log("Estoy en sendMessage")

    this._serverService.sendMessage(JSON.stringify(message)).subscribe(data=>{
      // this.lsResultShowList = data;
      console.log("InsideSendMessage: -->",data);
      this.arrayCommands = data;
      console.log("rta _ arrayCommands"+this.arrayCommands)
     // document.getElementById("textarea")!.innerHTML = data[0];
      //  this.lsResultShowList[0]);
      this.manejarArreglo(this.arrayCommands,this.cadena,this.arregloFin);
    }, error =>{
      console.log(error);
    });
  }

  //captura la selección del select en el html
  capturarSelect(){
 
    
      if(this.opcionSeleccionado == 'show list'){
        console.log("varSeleccionada",this.opcionSeleccionado);
        this.sendMessage(this.opcionSeleccionado);
              this.butDisabled = false;
              this.inputBandera = true;
              this.enviarBandera = true;
              this.inputMV = "";
            }
      if(this.opcionSeleccionado=='start'){
             this.inputBandera = false;
             this.enviarBandera = false;
            }

      if(this.opcionSeleccionado=='close'){
        this.inputBandera = false;
        this.enviarBandera = false;
      }

      if(this.opcionSeleccionado == 'create'){
        this.onCreate();
        this.inputMV="";
        this.inputBandera = true;
        this.enviarBandera = true;
      }
     
      else{
        console.log("algo salio mal")
      }
   }

   //Metodo que se encarga de crear  el pop-up de crear MV
  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "700px";
    this.dialog.open(ModalCreateComponent,dialogConfig);
  }
  
  //revisar como manejar este arreglo para que pinte solo la maquina
  manejarArreglo(arreglo:any[], cadena:string, arregloFin: any []){
    console.log("Estoy en manejar arreglo")
      cadena= arreglo.toString();
     arregloFin = cadena.split('"');

     console.log("1 "+arregloFin[0]+"\n  ")
     cadena=arregloFin[0] +"\n";
     console.log("2 "+cadena);
     for (let index = 0; index <= arregloFin.length; index++) {
       
        if(index == arregloFin.length-1){
           break;
         }
         console.log(cadena=cadena + arregloFin[index=index+1] +'\n')
       
        
          
       } 
       this.txtAreaRespuesta(cadena, this.inputMV); //ojo
       //cadena.replace('undefined','jajaja')
      
      
    
      //console.log(cadena);
 
   } 
   txtAreaRespuesta(cadena: string, inputMV:string){
     console.log("txtAreaRespuesta");
     if( this.opcionSeleccionado == 'show list')
     document.getElementById("textarea")!.innerHTML  = cadena ;
   }

   //Metodo que se encarga de enviar comandos
  enviar(){
    console.log("Estoy en enviar");
     
     if(this.opcionSeleccionado == 'start'){
      
       //     this.enviarBandera = false;
       this.sendMessage(this.opcionSeleccionado+"="+this.inputMV);
       document.getElementById("textarea")!.innerHTML  = "Se inicio la maquina virtual: \n"+this.inputMV;
     }
       if(this.opcionSeleccionado == 'close'){
         this.sendMessage(this.opcionSeleccionado+"="+this.inputMV);
         document.getElementById("textarea")!.innerHTML  = "Se cerro la maquina virtual: \n"+this.inputMV;
 
       }
         
   }
}


