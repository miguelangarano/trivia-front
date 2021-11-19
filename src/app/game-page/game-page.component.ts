import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  userService:UserService;
  router:Router;
  gameService:GameService;
  nameUser=localStorage.getItem("userName");
  correctAnswer:number = -1; //-1 en espera!!// 0 mal // 1 correcto

  constructor(userService:UserService, router:Router, gameService:GameService) { 
    this.userService=userService
    this.router=router
    this.gameService=gameService
  }

  ngOnInit(): void {
    this.userService.checkLoginUser()  
    this.gameService.setNewTriviaQuestion();


  }

  signOut():void{
    this.userService.signOut();
    this.router.navigateByUrl("/login")
  }

  selectAnswer(answer:string){
    console.log(answer)
    if(answer==this.gameService.correctAnswer){
      this.correctAnswer=1
      this.gameService.sendUserResponse(this.gameService.currentQuestion,answer)

    }else{
      this.correctAnswer=0
    }
    setTimeout(()=>{
      this.nextQuestion()
    }, 1000);
    
  }

  nextQuestion(){
    this.correctAnswer=-1;
    this.gameService.setNewTriviaQuestion();
  }

  goToPositions(){
    this.router.navigateByUrl("/score")
  }

}
