import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private _headers = new HttpHeaders().set("Content-Type", "application/json");


  readonly myAppUrl = environment.myAppUrl;
  readonly myApiGetServer= environment.myApiGetServer;

  constructor(private http: HttpClient) { }

  getServerIpActive(): Observable<any>{
    const headers =this._headers.append("foo","Bar");
    return this.http.get(this.myAppUrl+this.myApiGetServer,{headers: headers});
  }
}