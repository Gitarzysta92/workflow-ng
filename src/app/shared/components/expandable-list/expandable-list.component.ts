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

  @Input() data: Array<any>;

  public expandOnHover: boolean = false;
  @Input('onHover') set onHover(value) {
    this.expandOnHover = coerceBooleanProperty(value);
  } 

  public dataForView: Array<ExpandableItem> = [];

  constructor() { }

  ngOnInit() {

    if (Array.isArray(this.data)) {
      this.dataForView = this.data.map(item => new ExpandableItem(item)); 
    }
  }

  asd() {
    console.log('asd');
  }

}



export interface ExpandableListItem {
  expanded: boolean;
  childrens: Array<any>;
}


export class ExpandableItem implements ExpandableListItem {
  context: any;
  expanded: boolean = false;
  childrens: Array<ExpandableItem> = [];

  constructor(data: ExpandableListItem) {
    this._prepareChildrenItems(data.childrens);
    this._prepareContextData(data);

    console.log(data instanceof ExpandableNavigationItem)
  }



  private _prepareContextData(data: any): void {
    const asd = {
      set: (obj, prop, value): boolean => {
        //console.log(prop, value);
        if (prop === 'expanded') {
          this.expanded = value;
        }
        obj[prop] = value;
        return true;
      },
      get: (obj, prop): any => {
        // if (prop === 'expanded') {
        //   console.log(prop);
        // }
        
        return obj[prop];
      }
    }


    this.context = new Proxy(data, asd);
  }

  private _prepareChildrenItems(childrens: Array<any>) {
    if (Array.isArray(childrens)) {
      this.childrens = childrens.map(child => new ExpandableItem(child));
    }
  }

}