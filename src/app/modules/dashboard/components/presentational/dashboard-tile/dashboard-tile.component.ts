import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { slideInAnimation } from 'src/app/shared/animations/animations';

@Component({
  selector: 'dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.scss'],
  host: { '[class]': 'widthClass' },
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class DashboardTileComponent implements OnInit {

  // tile name
  @Input() name: string = ''; 

  // tile width
  @Input() size: string = 'medium';

  // tile background color
  @Input() color: string = '#f6f6f6'; 


  @Input() data;

  // host element reference
  private _element: HTMLElement


  constructor(
    private readonly _nativeElement: ElementRef,
    private readonly _rendered: Renderer2
  ) {
    this._element = _nativeElement.nativeElement

  }

  ngOnInit() {
    this._setElementStyle('background-color', this.color);
    this._setElementStyle('width', this._getWidthClassName(this.size));
  }


  private _setElementStyle(style: string, value: any): void {
    this._rendered.setStyle(this._element, style, value);
  }

  private _getWidthClassName(tileSize: string): string {
    let className = '';

    switch(tileSize) {
      case 'medium': {
        className = 'col-md-6';
        break;
      }
      case 'full': {
        className = 'col-12';
        break;
      }
      default: {
        className = 'col-md-6'
      }
    }
    return className;
  }


}