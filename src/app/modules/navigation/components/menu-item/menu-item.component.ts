import { Component, OnInit, Input } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() label: string = '';
  @Input() path: string = '';
  @Input() children: Array<any> = [];

  isActive: boolean = false;


  constructor(
    private readonly route: Route;
  ) { }

  ngOnInit() {
    this.isActive = !!(this.route.url === this.path);
  }

}
