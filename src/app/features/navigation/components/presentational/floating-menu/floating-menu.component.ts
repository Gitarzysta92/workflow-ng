import { Component, OnInit, Input, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ExpandableNavigationItem } from '../../containers/main-menu/main-menu.component';
import { FloatingTrayComponent } from 'src/app/shared/components/floating-tray/floating-tray.component';
import { trigger, state, style, transition, animate, AnimationEvent } from '@angular/animations';


@Component({
  selector: 'floating-menu',
  templateUrl: './floating-menu.component.html',
  styleUrls: ['./floating-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('expandWidth', [
      state('open', style({ width: '100%' })),
      state('closed', style({ width: '0' })),
      transition('open => closed', [
        animate('0.1s 180ms linear')
      ])
    ]),
  ]
})
export class FloatingMenuComponent implements OnInit {

  @ViewChild('floatingTray', { static: true }) _floatingTray: FloatingTrayComponent;

  @Input() items: Array<ExpandableNavigationItem> = [];

  public submenuTitle: string;
  public submenuItems: Array<ExpandableNavigationItem>;

  public isItemBackgroundCollapsed: boolean = false;


  constructor(
    private readonly _changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.items = this.items.map(item => Object.assign(item, { settled: false }));
  }

  public toggleSubmenuTray(targetItem: ExpandableNavigationItem, state: boolean): void {
    this.submenuTitle = targetItem.name;
    this.submenuItems = targetItem.childrens;
    this._floatingTray.toggle(state);
  }

  public setHoveredMenuItem(url: string): void {
    this.isItemBackgroundCollapsed = false;
    this.items.forEach(item => item.settled = url === item.url);
    this._changeDetector.markForCheck();
  }

  public clearHoveredMenuItems(event: AnimationEvent): void {
    if (event.fromState === 'open' && event.toState === 'closed') {
      this.items.forEach(item => item.settled = false);
      this._changeDetector.markForCheck();
    }
  }

  public slideOutMenuItemBackground() {
    this.isItemBackgroundCollapsed = true;
  }

}
