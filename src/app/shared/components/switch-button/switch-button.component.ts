import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'switch-button',
  templateUrl: './switch-button.component.html',
  styleUrls: ['./switch-button.component.scss']
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
