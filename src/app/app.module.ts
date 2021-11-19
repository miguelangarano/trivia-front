import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { ScorePageComponent } from './score-page/score-page.component';
import { AnswerButtonComponent } from './answer-button/answer-button.component';
import { OptionButtonComponent } from './option-button/option-button.component';
import { LogoImgComponent } from './logo-img/logo-img.component';
import { PosPersonButtonComponent } from './pos-person-button/pos-person-button.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    GamePageComponent,
    ScorePageComponent,
    AnswerButtonComponent,
    OptionButtonComponent,
    LogoImgComponent,
    PosPersonButtonComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
