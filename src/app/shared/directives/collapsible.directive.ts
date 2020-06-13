import { Directive, OnInit, Input, OnDestroy, ElementRef, Output, EventEmitter } from '@angular/core';
import { AnimationBuilder } from '@angular/animations';
import { Observable, Subject, merge } from 'rxjs';


@Directive({
  selector: '[collapsible]',
  exportAs: 'collapsibleRef'
})
export class Collapsible implements OnInit, OnDestroy  {



  private _asd: EventEmitter<boolean>;

  private _isCollapsed: boolean = false;
  public set isCollapsed(value) {
    if (this.isCollapsed === !!value) return;

    this._isCollapsed = !!value;
    this._isCollapsed ? this.collapse() : this.expand();
    this._asd.emit(this.isCollapsed);
  }

  public get isCollapsed() {
    return this._isCollapsed 
  }

  @Output() onCollapse: Observable<boolean>;


  private _collapsed: string = 'collapsed';

  constructor(
    private el: ElementRef,
  ) {
    this._asd = new EventEmitter();

    const onSubscribe = new Observable<boolean>(subscriber => subscriber.next(this._isCollapsed));
    this.onCollapse = merge(onSubscribe, this._asd)
  }

  ngOnInit() { }

  ngOnDestroy() {
    //this.gridService.addView(this.type, this.publicApi);
  }


  collapse(): void {
    this.el.nativeElement.classList.add(this._collapsed);
  }

  expand(): void {
    this.el.nativeElement.classList.remove(this._collapsed)
  }



  // @HostListener('mouseover') onMouseOver() {}

}

