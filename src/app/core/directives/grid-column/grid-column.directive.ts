import { Directive, OnInit, Input, OnDestroy, ElementRef } from '@angular/core';
import { TemplateGridService } from '@workflow/grid';


@Directive({
  selector: '[grid-column]',
})
export class GridColumn implements OnInit, OnDestroy  {

  @Input() type: number;

  collapsed: string = 'collapsed';

  constructor(
    private el: ElementRef,
    private readonly gridService: TemplateGridService
  ) {}

  ngOnInit() {
    this.gridService.addView(this.type, {
      collapse: () => this.collapse(),
      expand: () => this.expand()
    });
  }

  ngOnDestroy() {
    //this.gridService.addView(this.type, this.publicApi);
  }


  collapse(): void {
    this.el.nativeElement.classList.add(this.collapsed);
  }

  expand(): void {
    this.el.nativeElement.classList.remove(this.collapsed)
  }



  // @HostListener('mouseover') onMouseOver() {}

}

