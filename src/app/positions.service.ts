import { Injectable } from '@angular/core';
import { ApiResponse } from './api-response.model';
import { Gamer } from './gamer.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PositionsService {
  httpClient:HttpClient
  constructor(httpClient:HttpClient) {
    this.httpClient=httpClient
  }

  gamersPosition: Gamer[]=[
    new Gamer(1,"Alejandro",2),
    new Gamer(2,"Alejandro",2),
    new Gamer(2,"Alejandro",2),
    new Gamer(2,"Alejandro",2)
  ]

  async getScoreBoard():Promise<ApiResponse>{
    try{
    const data = await this.httpClient.get("http://localhost:4001/game/scoreboard").toPromise();
    const response = JSON.parse(JSON.stringify(data))
    console.log(response.data.player[0])
    return {status:response.status,message:response.message,data:response.data}
    }catch(error){
      console.log(error)
    }
  }
  
  async setPositions(){
    const response = await this.getScoreBoard()
    this.gamersPosition=response.data.player
    console.log(response)
  }
}

