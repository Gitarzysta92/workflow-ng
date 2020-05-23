 import { Component, OnInit, ContentChild, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'expandable-list',
  templateUrl: './expandable-list.component.html',
  styleUrls: ['./expandable-list.component.scss']
})
export class ExpandableListComponent implements OnInit {

  @ContentChild('listItem', { static: true}) listItem: TemplateRef<any>;

  @Input() data: Array<any>;

  public dataForView: Array<ExpandableItem> = [];

  constructor() { }

  ngOnInit() {
    this.data

    if (Array.isArray(this.data)) {
      this.dataForView = this.data.map(item => new ExpandableItem(item)); 
    }
  }

}


export class ExpandableItem {
  context: any;
  childrens: Array<ExpandableItem> = [];

  constructor(data) {
    this._prepareChildrenItems(data.childrens);
    this._prepareContextData(data);
  }

  private _prepareContextData(data: any): void {
    this.context = data || {};
  }

  private _prepareChildrenItems(childrens: Array<any>) {
    if (Array.isArray(childrens)) {
      this.childrens = childrens.map(child => new ExpandableItem(child));
    }
  }

}