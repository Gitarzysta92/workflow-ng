import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { Subject, interval, timer, merge } from 'rxjs';
import { throttle, debounce, multicast, debounceTime, skip, take, skipWhile, takeWhile, filter } from 'rxjs/operators';

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
  private _state: Subject<boolean> = new Subject();

  @HostListener('mouseenter') onMouseEnter() {
    this._state.next(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._state.next(false);
  }

  constructor() { }

  ngOnInit() {
    this._state
      .pipe(multicast(new Subject(), s => merge(
        s.pipe(filter(value => value === true && this.isExtended === false)),
        s.pipe(skip(1), debounceTime(500)),
      )),)
      .subscribe(stateValue => {
        this.isExtended = stateValue;
      })
  }

  public toggle(state?: boolean): void {
    const newState = state || !this.isExtended;
    this._state.next(newState);
  }

  // private _throttle(callback: Function): void {
  //   const noop = () => {};
  //   let callbackHost = () => {
  //     callbackHost = noop;
  //     callback();
  //   } 

  //   if (this.throttle === null) {
  //     callbackHost();
  //   }

  //   clearTimeout(this.throttle);
  //   this.throttle = setTimeout(() => {
  //     callbackHost();
  //     this.throttle = null
  //   }, 300);
    
  // }
}
