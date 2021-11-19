import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PositionsService } from '../positions.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.css']
})
export class ScorePageComponent implements OnInit {
  userService:UserService;
  positionService:PositionsService;
  router:Router
  constructor(userService:UserService,positionService:PositionsService,router:Router) { 
    this.userService=userService
    this.positionService=positionService
    this.router=router
  }

  ngOnInit(): void {

    this.positionService.setPositions()
  }

  
  returnToGame(){
    this.router.navigateByUrl("/game")
  }

  signOut():void{
    this.userService.signOut();
    this.router.navigateByUrl("/login")
  }

}
