import { Injectable } from '@angular/core';
import {Http, Response, RequestMethod, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class LoginService {

  loggedIn = false;
  constructor(private http: Http) { }

  logUser(user: any): Observable<any> {
    const url: string = localStorage.getItem('remoteUrl') + 'api/logUser';
    return this.http.post(url, user).map((res: Response) => res.json());
  }

  checkLogin():boolean
  {
    return this.loggedIn;
  }

  markLogin() {
    this.loggedIn = true;
  }

  markLogOff()
  {
    this.loggedIn = false;
  }
}
