 import { Component, OnInit, ContentChild, TemplateRef, Input } from '@angular/core';
 import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ExpandableNavigationItem } from 'src/app/features/navigation/components/containers/main-menu/main-menu.component';

@Component({
  selector: 'expandable-list',
  templateUrl: './expandable-list.component.html',
  styleUrls: ['./expandable-list.component.scss']
})
export class ExpandableListComponent implements OnInit {

  @ContentChild('listItem', { static: true}) listItem: TemplateRef<any>;

  @Input() data: Array<ExpandableListItem>;

  public expandOnHover: boolean = false;
  @Input('onHover') set onHover(value) {
    this.expandOnHover = coerceBooleanProperty(value);
  } 

  public dataForView: Array<ExpandableListItem> = [];

  constructor() { }

  ngOnInit() {
    if (Array.isArray(this.data)) this.dataForView = this.data;
  }

  public toggleItem(event: Event, item: ExpandableListItem, state?: boolean): void {
    event.preventDefault();
    if (item.settled === true) return;
    item.expanded = state || !item.expanded;
  } 

}


export interface ExpandableListItem {
  expanded: boolean;
  settled: boolean;
  childrens: Array<ExpandableListItem>;
}