import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BranchComponent } from './branch/branch.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {LoginService} from './login.service';
import {BranchService} from "./branch.service";
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path: 'branch', component: BranchComponent},
  {path: '', component: LoginComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BranchComponent,
    LoginComponent,
    LogoutComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [LoginService,BranchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
