import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-option-button',
  templateUrl: './option-button.component.html',
  styleUrls: ['./option-button.component.css']
})
export class OptionButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.buttonText)
    console.log(this.className)
  }

  @Input() buttonText: string =""
  @Input() className: string =""
  @Output() externalButtonAction: EventEmitter<any> = new EventEmitter()

  buttonAction(){
    this.externalButtonAction.emit()
  }
}
