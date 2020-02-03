export class NavigationItem {
  name: string;
  path: Array<string>;
  childrens: Array<NavigationItem>;
  
  position: number;
  icon: string;
  active: boolean = false;
  url: any;
  isToplevel: boolean;

  constructor(itemData){
    this.name = itemData.name;
    this.path = itemData.path;
    this.childrens = itemData.childrens || [];

    this.position = itemData.meta ? itemData.meta.position : 0;
    this.icon = itemData.meta ? itemData.meta.icon : '0';
    this.url = itemData.url;
    this.isToplevel = itemData.isToplevel;
  }
}