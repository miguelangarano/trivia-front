import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(router:Router){
    this.router = router
  }
  router:Router
  title = 'trivia';
  miVariable = 'Hello';
  names: string[] = [

  ]
  respuesta="hola desde principal";
  vocales:string[]=[
    "a",
    "e",
    "i",
    "o",
    "u"
  ];

  addName(name){
    this.names.push(name)
  }
  deleteName(index:number){
    this.names.splice(index,1)
  }

  esVocal(vocal:string){

    for (let index = 0; index < this.vocales.length; index++) {
      
      if(this.vocales[index]==vocal){
        return true
      }
      
    }
    return false
  }
  respuestaSeleccionada(ans:any){
    console.log("Leggo aquí", ans)
    this.respuesta="nueva respuestas"
  }

  routeToUrl(address: string){

    this.router.navigateByUrl('/'+ address)
  }

}
