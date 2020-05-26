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
    this.name = NavigationItem._capitalizeFirstLetter(itemData.name);
    this.path = itemData.path;
    this.childrens = itemData.childrens || [];

    this.position = (itemData.meta ? itemData.meta.position : itemData.position) || 0;
    this.icon = itemData.meta ? itemData.meta.icon : itemData.icon;
    this.url = itemData.url;
    this.isToplevel = itemData.isToplevel;
  }

  private static _capitalizeFirstLetter(value: string): string {
    if (typeof value === 'string' && value.length > 0)
      value = value.charAt(0).toUpperCase() + value.slice(1);
    return value;
  }
}