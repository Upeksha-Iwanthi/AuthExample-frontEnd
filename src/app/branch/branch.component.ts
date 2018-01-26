import { Component, OnInit } from '@angular/core';
import {BranchService} from "../branch.service";
import {LoginService} from "../login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  branchList = [];
  branchData: BranchData;
  constructor(private router: Router,private branchService: BranchService,private loginService:LoginService) { }

  ngOnInit() {
    if(this.loginService.checkLogin()){
      this.branchService.getAllBranches().subscribe(
        data => {
          this.branchList = data
        }
      );
    }

  }

  doLogout(){
    this.loginService.markLogOff();
    this.router.navigate(['']);
  }

}

export class BranchData {
  classpath: string;
  jiraIssueId:string;
  revision: number;
}
