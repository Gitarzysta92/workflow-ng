import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router'


@Component({
  selector: 'grid-column',
  templateUrl: './layout-grid.component.html',
  styleUrls: ['./layout-grid.component.css']
})
export class GridColumn implements OnInit, AfterViewInit {
  @Input() name: string = '';
  @Input() config: object = {};

  constructor() { 
  }

  ngOnInit() {
  } 

  ngAfterViewInit() {
    console.log(this.name, this.config);
  }
}

