import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _headers = new HttpHeaders().set("Content-Type", "application/json");

  readonly myAppUrl = environment.myAppUrl;
  readonly myApiGetDashboard =environment.myApiGetDashboard;

  constructor(private http: HttpClient) { }

  obtainDashboard():Observable<any>{
      const headers =this._headers.append("foo","Bar");

    return this.http.get(this.myAppUrl+this.myApiGetDashboard,{headers: headers});
  }
  
}
