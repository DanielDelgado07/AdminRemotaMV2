import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(){}
  /**Se encarga de ocultar la vista del sideBar */
  toggleSideBar(){
    this.toggleSideBarForMe.emit();//Captura el evento emitido
  }

}
