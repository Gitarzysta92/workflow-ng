import { Directive, OnInit, Input, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { config } from 'rxjs';



@Directive({
  selector: '[grid-column]',
})
export class GridColumn implements OnInit, AfterViewInit {
  @Input() config: object = {};

  column: HTMLElement;
  columnConfig: GridConfig;

  elemChilds: Array<HTMLElement>;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.column = this.el.nativeElement;
    this.columnConfig = new GridConfig(this.config);

    this._prepareWidthClassForColumn(this.columnConfig.width);
    this._setupElementVisibility(this.columnConfig.display);
  } 

  ngAfterViewInit() {
  }

  // @HostListener('mouseover') onMouseOver() {}

  private _prepareWidthClassForColumn(width) {
    let widthClass = '';

    switch(width) {
      case 0: {
        widthClass = 'not-to-display'
      }
      case 3: {
        widthClass = 'col-3';
        break;
      }
      case 6: {
        widthClass = 'col-6'
        break;
      }
      default: {
        widthClass = 'col-12';
      }
    }
    this.column.classList.add(widthClass);

    // this.column.childNodes.forEach(node => {
    //   this.renderer = 
    // });
  }

  private _setupElementVisibility(display) {
    if (display) {
      this.column
    } else {

    }
  }
}

export class GridConfig {
  width: number;
  display: boolean;
  constructor(config) {
    this.width = config.width;
    this.display = config.display;
  }
}