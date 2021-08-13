import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { DashboardService } from 'src/app/services/dashboard.service';

export interface Dashboard {
     Id: number;  
     HostName: string; 
     HardDisk: string;
     Memory: string;
     Cpu: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'hostName', 'hardDisk', 'memory','cpu'];
  // dataSource = ELEMENT_DATA;
 
   dataSource: any = []
   lsDataMachine: any=[];

  constructor(private _dashboardServices: DashboardService, private toastr: ToastrService) { }
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.obtenerDashboardTable();
    this.dataSource.paginator = this.paginator;
  }

  obtenerDashboardTable(){
    this._dashboardServices.obtainDashboard().subscribe(data=>{
      this.lsDataMachine=data;
     this.dataSource = new MatTableDataSource< Dashboard>(this.lsDataMachine);
      console.log("data->",data);
   
    },
    error =>{
      console.log(error);
    });

  }

}
