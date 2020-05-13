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

  // content
  @Input() title: string = '';
  @Input() excerpt: string = '';
  @Input() date: Date; 

  // meta
  @Input() id: number;
  @Input() urlSegment: Array<string> = [];
  @Input() size: string = 'medium';
  @Input() backgroundColor: string = '#f6f6f6'; 


  // host element reference
  private _element: HTMLElement;

  constructor(
    private readonly _ref: ElementRef,
    private readonly _rendered: Renderer2
  ) {
    this._element = _ref.nativeElement;
  }

  ngOnInit() {
    this._setElementStyle('background-color', this.backgroundColor);
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