import { Injectable } from '@angular/core';
import {Http, Response, RequestMethod, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class BranchService {

  constructor(private http: Http) {
  }

  getAllBranches(): Observable<any[]> {
    var url: string = localStorage.getItem("remoteUrl") + "api/getAllBranches";
    return this.http.get(url).map((res: Response) => res.json())
  }

}
