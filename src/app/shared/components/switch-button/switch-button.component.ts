import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss'],
  animations: [
    trigger('toggle', [
      state('on', style({ transform: 'translate(100%)' })),
      state('off', style({ transform: 'translate(0)' })),
      transition('* => *', [ animate('0.3s ease-in-out') ]),
    ]), 
  ],
})
export class SwitchButtonComponent implements OnInit {

  @Input() state: boolean = false;
  @Output() stateChange: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
  }

  public toggleState(): void {
    this.state = !this.state;
    this.stateChange.emit(this.state);
  }

}
