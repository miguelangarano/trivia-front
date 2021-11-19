import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  userService:UserService;
  router: Router;
  constructor(userService: UserService, router: Router) {
    this.userService = userService
    this.router = router
  }

  ngOnInit(): void {
    const isLogin:boolean =this.userService.checkLoginUser()
    if(isLogin == true){
      this.router.navigateByUrl('/game')
    }
  }

  userName = ""
  userPassword=""

  async onUserNameCreate(){
    if (this.userName == "" || this.userPassword=="") {
      alert("El nombre o password no deben estar vacíos.")
      return
    }
    const loginValidation = await this.userService.createUserName(this.userName, this.userPassword)
    if(loginValidation==true){
      this.router.navigateByUrl('/game');
    }else{
      alert("User or Incorrect Password")
    }
    
  }


}
