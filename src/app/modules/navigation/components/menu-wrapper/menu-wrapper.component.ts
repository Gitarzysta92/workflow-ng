import { Component, OnInit, Input } from '@angular/core';
import { Route, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'menu-wrapper',
  templateUrl: './menu-wrapper.component.html',
  styleUrls: ['./menu-wrapper.component.scss']
})
export class MenuWrapperComponent implements OnInit {

  @Input() menuItems: Array<any> = [];

  constructor(
  ) { }

  ngOnInit() {
    this.menuItems = this.menuItems.sort((first, second) => {
      if (!(first.meta && second.meta)) return;
      return first.meta.position - second.meta.position;
    })
  }

}
