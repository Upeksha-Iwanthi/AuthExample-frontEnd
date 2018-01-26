import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {LoginService} from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  login: Login;
  response = {message : '', code : 0};
  constructor(private loginService: LoginService, private router: Router, ) {
    this.login = new Login();
  }

  ngOnInit() {
  }

  onLogin() {
    this.loginService.logUser(this.login).subscribe(
      data => {
        this.response = data;
        console.log(this.response);

        if (this.response.code == 1) {
          this.loginService.markLogin();
          this.router.navigate(['branch']);
        }
        if(this.response.code==2){
          this.login.username = "";
          this.login.password = "";
        }
      }
    );
  }

}

export class Login {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  useremail: string;
  password: string;
}


