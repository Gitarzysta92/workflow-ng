import { Component, OnInit, Input } from '@angular/core';
import { Route, Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operator';

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
    private readonly route: Route,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.isActive = !!(this.route.url === this.path);

    this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe((event: NavigationStart) => {
        
      })
  }

}
