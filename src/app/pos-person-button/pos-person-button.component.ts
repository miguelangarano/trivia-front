import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pos-person-button',
  templateUrl: './pos-person-button.component.html',
  styleUrls: ['./pos-person-button.component.css']
})
export class PosPersonButtonComponent implements OnInit {

  constructor() { }

  @Input() nameGamer: string | undefined
  @Input() pointsGamer: string | undefined
  @Input() positionGamer: string | undefined
  ngOnInit(): void {
  }

}
