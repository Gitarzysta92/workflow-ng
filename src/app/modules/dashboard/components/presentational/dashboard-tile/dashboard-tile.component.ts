import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { DashboardTile } from '../../../models/dashboard-tile';

@Component({
  selector: 'dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.scss'],
  host: { '[class]': 'widthClass' }
})
export class DashboardTileComponent implements OnInit, AfterViewInit {


  @Input() set params(values) { 
    this.name = values.name;
    this.widthClass = this._getWidthClassName(values.size);
  }

  public name: string;
  public widthClass: string; 


  private element: HTMLElement


  constructor(
    element: ElementRef,
    private rendered: Renderer2
  ) {
    this.element = element.nativeElement
    
  }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    console.log(this.element.offsetWidth);

    //this.rendered.setStyle(this.element, 'height', this.element.offsetWidth + 'px')
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
