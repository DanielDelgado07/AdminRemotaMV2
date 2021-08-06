import { Component, OnInit, Input} from '@angular/core';
import { SideBarChangesNamesService } from 'src/app/services/side-bar-changes-names.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  //public listDataUser: Array<any> =[]
  //@Input('rol_usuario') propiedad_uno!:string; // esta propiedad va a llegar desde afuera


  constructor(public _servicioCambioNombre: SideBarChangesNamesService ) {
   
   }
   
  ngOnInit(): void {
    this._servicioCambioNombre.nameUser;
   this._servicioCambioNombre.roleUser;
  }

}
