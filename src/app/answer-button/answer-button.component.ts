import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-answer-button',
  templateUrl: './answer-button.component.html',
  styleUrls: ['./answer-button.component.css']
})
export class AnswerButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() answer: string | undefined
  @Output() buttonSelected: EventEmitter<any> = new EventEmitter()
  selectAnswer(){
    this.buttonSelected?.emit(this.answer)
  }

}
