import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-comandos',
  templateUrl: './comandos.component.html',
  styleUrls: ['./comandos.component.scss']
})
export class ComandosComponent implements OnInit {
  checklist: any =[];
  masterSelected:boolean;
  //checklist:any;
  checkedList:any;
 
  constructor(private _serverService: ServerService) { 
    this.masterSelected= false;
    this.getCheckedItemList();
    this.checklist;
    this.checklist =[ 
    {id: 1, hostName: "MacBook-Pro-de-Daniel.local", ipAddress: "192.168.0.17", port: 3401},
    {id: 2, hostName: "Windows-de-Daniel.local", ipAddress: "192.168.0.18", port: 3401},
    {id: 3, hostName: "Linux-de-Daniel.local", ipAddress: "192.168.0.19", port: 3401},
    {id: 4, hostName: "Centus-de-Daniel.local", ipAddress: "192.168.0.20", port: 3401}
  ]
  this.checklist.map((re:any) => {re.checked =false;});  
  }

  ngOnInit(): void {
    this.obtainListServerActive();
  
  }

  //obtener la lista de las direccioens ip de los servidores activos 
  obtainListServerActive(){
      this._serverService.getServerIpActive().subscribe(data=>{

        console.log(data);
       // this.checklist= data;
        //console.log( "jjajaja",this.listDirectionsIp);
      }, error=>{
        console.log(error);
      });
}



  
   
   
  //  console.log(this.listIpAddress,'fdata');




   
        //   const ischecked = (<HTMLInputElement>event.target).checked;
        //   this.service.change(this.d!.id.toString(), ischecked).subscribe(res:any => {
        //     console.log(res)
        //   }, err => {
        //     console.log(err)
        // })

        //recorre la lista y lo va a igualar al valor del evento
      //   this.listIpAddress.forEach(element:any => element.checked = event);


    
  // The master checkbox will check/ uncheck all items
  checkUncheckAll() {
    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
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
      if(this.checklist[i].isSelected)
      this.checkedList.push(this.checklist[i]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }

}


