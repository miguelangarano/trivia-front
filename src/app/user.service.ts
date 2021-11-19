import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from './api-response.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userService:UserService;
  userName: string = "";
  token: string = "";
  userPassword: string = ""
  httpClient:HttpClient
  constructor(httpClient:HttpClient) { 
    this.httpClient=httpClient
  }

  async createUserName(name:string,password:string):Promise<boolean>{
    const registerResponse:ApiResponse = await this.createRegisterRequest(name,password)
    if(registerResponse.status==false){
      const loginResponse:ApiResponse = await this.loginRegisterRequest(name,password)
      if(loginResponse.status==true){
        localStorage.setItem("userName",name)
        localStorage.setItem("token",loginResponse.data.token)
        this.userName=name
        this.token=loginResponse.data.token
        return true;
      }
      return false;
    }
    localStorage.setItem("userName",name)
    localStorage.setItem("token",registerResponse.data.token)
    this.userName=name
    this.token=registerResponse.data.token
    return true;
  }

  async createRegisterRequest(name: string,password:string):Promise<ApiResponse>{
    const data = await this.httpClient.post("http://localhost:4001/players/register",{name,password}).toPromise();
    const json = JSON.parse(JSON.stringify(data))
    console.log({status:json["status"],message:json["message"],data:json["data"]})
    return {status:json["status"],message:json["message"],data:json["data"]}
    
  }
  async loginRegisterRequest(name: string,password:string):Promise<ApiResponse>{
    const data = await this.httpClient.post("http://localhost:4001/players/login",{name,password}).toPromise();
    console.log(data)
    const json = JSON.parse(JSON.stringify(data))
    return {status:json["status"],message:json["message"],data:json["data"]}
  }
  
  checkLoginUser():boolean {
    const userName = localStorage.getItem("userName")
    const token = localStorage.getItem("token")
    if(userName!=null && token!=null){
      this.token=token
      this.userName=userName
      return true;
    }
    return false;
  }
  
  isLoggedIn(){
    const userName = localStorage.getItem("userName")
    if (userName != null) {
      this.userName=userName
      return true
    }
    return false
  }

  signOut(){
    localStorage.removeItem("userName")
    this.userName=""
  }

}
