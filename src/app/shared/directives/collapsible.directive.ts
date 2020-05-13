import { Directive, OnInit, Input, OnDestroy, ElementRef } from '@angular/core';


@Directive({
  selector: '[collapsible]',
  exportAs: 'collapsibleRef'
})
export class Collapsible implements OnInit, OnDestroy  {


  private _isCollapsed: boolean = false;
  public set isCollapsed(value) {
    if (this.isCollapsed === !!value) return;

    this._isCollapsed = !!value;
    this.isCollapsed ? this.collapse() : this.expand();
  }

  public get isCollapsed() {
    return this._isCollapsed 
  }


  private _collapsed: string = 'collapsed';

  constructor(
    private el: ElementRef,
  ) {}

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

