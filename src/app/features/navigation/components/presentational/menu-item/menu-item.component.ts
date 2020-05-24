import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators'


@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  host: {
    '[class.active]': 'isActive',
    '[class.top-level]': 'isToplevel'
  }
})
export class MenuItemComponent implements OnInit {

  @Input() label: string = '';
  @Input() path: string = '';
  @Input() childrens: Array<any> = [];

  @Input() isActive: boolean = false;
  @Input() isToplevel: boolean = false;


  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
