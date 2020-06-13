import { Component, OnInit, Input, HostBinding, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { filter } from 'rxjs/operators'


@Component({
  selector: 'menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.active]': 'isActive',
    '[class.top-level]': 'isToplevel',
    '[class.narrow]': 'isNarrow',
    '[class.focus]': 'isFocused'
  }
})
export class MenuItemComponent implements OnInit, OnChanges{

  @Input() label: string = '';
  @Input() path: string = '';
  @Input() icon: string = null;

  @Input() isActive: boolean = false;
  @Input() isToplevel: boolean = false;
  // TODO : Change input property name to be more descriptive.
  @Input() isNarrow: boolean = false;


  @Input() isFocused: boolean = false;



  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    //console.log('asd');
  }
}
