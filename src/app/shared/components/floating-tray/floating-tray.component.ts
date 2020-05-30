import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'floating-tray',
  templateUrl: './floating-tray.component.html',
  styleUrls: ['./floating-tray.component.scss'],
  host: {
    '[class.extended]' : 'isExtended'
  }
})
export class FloatingTrayComponent implements OnInit {

  public isExtended: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public toggle(state?: boolean): void {
    console.log('asd');
    this._throttle(() => {
      this.isExtended = state || !this.isExtended;
    })
  }

  private _throttle(callback: Function): void {

  }
}
