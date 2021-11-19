import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from './api-response.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  currentQuestion:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perspiciatis veniam a consequatur veritatis, nostrum tenetur, minus, soluta fuga ex laborum magni id. Quaerat libero rem ab, hic consequatur eos!"
  answerOptions: string[]=[
    "opcion1",
    "opcion2",
    "opcion3",
    "opcion4"
  ]
  correctAnswer:string="opcion3"
  userService:UserService;
  httpClient:HttpClient
  constructor(userService:UserService,httpClient:HttpClient) {
    this.httpClient=httpClient
    this.userService=userService
  }

  async getTriviaQuestion():Promise<ApiResponse>{
    const data = await this.httpClient.get("http://localhost:4001/questions/single",{headers:{user:this.userService.userName,"access-token":this.userService.token}}).toPromise();
    const response = JSON.parse(JSON.stringify(data))
    return {status:response.status,message:response.message,data:response.data}
  }

  async setNewTriviaQuestion(){
    const response = await this.getTriviaQuestion();
    console.log(response)
    this.currentQuestion = response.data.question.question
    this.answerOptions=response.data.question.answer
    this.correctAnswer=response.data.question.correctAnswer
  }

  sendUserResponse(question:string,answer:string){
    this.httpClient.post(
      "http://localhost:4001/questions/response",
      {
        question:question,
        answer:answer
      },
      {
        headers:{
          user:this.userService.userName,
          "access-token":this.userService.token
        }
      }
    ).toPromise();
  }
}
