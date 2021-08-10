import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Server } from '../model/server';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private _headers = new HttpHeaders().set("Content-Type", "application/json");


  readonly myAppUrl = environment.myAppUrl;
  readonly myApiGetServer= environment.myApiGetServer;
  readonly myApiGetConnect = environment.myApiGetConnect;

  constructor(private http: HttpClient) { }

  getServerIpActive(): Observable<any>{
    const headers =this._headers.append("foo","Bar");
    return this.http.get(this.myAppUrl+this.myApiGetServer,{headers: headers});
  }
  
  getConnect( serverDTO: Server[]): Observable<any>{
    const headers =this._headers.append("foo","Bar");
    return this.http.post(this.myAppUrl+this.myApiGetConnect,serverDTO,{headers: headers});
  }
}