import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'menu-wrapper',
  templateUrl: './menu-wrapper.component.html',
  styleUrls: ['./menu-wrapper.component.scss']
})
export class MenuWrapperComponent implements OnInit {

  @Input() items: Array<any> = [];

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //console.log(this.route);
    this.items = this.items.sort((first, second) => {
      if (!(first.meta && second.meta)) return;
      return first.meta.position - second.meta.position;
    })
  }

}
