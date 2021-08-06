import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _headers = new HttpHeaders().set("Content-Type", "application/json");

  readonly myAppUrl = environment.myAppUrl;
  readonly myApiUrl = environment.myApiUrl;
  readonly myApiBodyUser = environment.myApiBodyUser;
  
  constructor(private http: HttpClient) {}
  
  
  getLoginUser(userDTO: any): Observable<any>{
    
    const headers =this._headers.append("foo","Bar");
    return this.http.post(this.myAppUrl+this.myApiUrl,userDTO,{headers: headers});
  }

  registerUser(userDTO: any): Observable<any> {
    const headers =this._headers.append("foo","Bar");
    return this.http.post(this.myAppUrl+this.myApiBodyUser,userDTO,{headers:headers});
  }
}
