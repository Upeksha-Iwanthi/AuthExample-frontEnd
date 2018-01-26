import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private  loginService:LoginService) { }

  doLogin()
  {
    this.loginService.markLogOff();
    this.router.navigate(['']);
  }


  ngOnInit() {

  }

  toBranch()
  {
    if (this.loginService.checkLogin())
    {
       this.router.navigate(['branch']);
    } else
    {
      this.router.navigate(['']);
    }
  }

}
