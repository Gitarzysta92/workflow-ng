import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { GridViews } from '@workflow/grid';
import { UserService } from '../../services/shared-api/shared-api.service';
import { RouterOutlet, Router, NavigationStart, Route, ActivatedRoute, UrlTree } from '@angular/router';
import { slideInAnimation } from 'src/app/shared/animations/animations';
import { filter, tap } from 'rxjs/operators';
import { DynamicComponentsRegistryService } from '../../services/dynamic-components-registry/dynamic-components-registry.service';
import { TypeOfInsertionPoint } from 'src/app/app';


@Component({
  selector: 'app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.scss'],
  animations: [
    slideInAnimation,
  ]
})
export class AppViewComponent implements OnInit {
  @ViewChild('outlet', { static: true }) primaryOutllet: RouterOutlet;
  
  gridViews: any;


  stack: Array<string>;
  stackMax: number;

  trigger: string;

  public sidebarRightComponents: Array<any>;
  public sidebarLeftComponents: Array<any>;
  public sidebarLeftContext: any;

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _dynamicComponents: DynamicComponentsRegistryService
    
  ) {
    this.gridViews = GridViews;

    this.stack = [];
    this.stackMax = 10;
  }


  ngOnInit(): void {
    this.sidebarRightComponents = this._dynamicComponents.getItems(TypeOfInsertionPoint.sidebarRight);
    this.sidebarLeftComponents = this._dynamicComponents.getItems(TypeOfInsertionPoint.sidebarLeft);

    const asd = JSON.parse(sessionStorage.getItem('routingHistory'));

    this.stack = asd || [];

    // this.primaryOutllet.activateEvents.subscribe(result => {
    //   console.log(result);
    //   this.trigger = false;
    // });
    //this.primaryOutllet.deactivateEvents.subscribe(result => console.log(result));

    this._router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event ) => {
        //this.trigger = !this.trigger;

        const urlTree = this._router.parseUrl((event as NavigationStart).url);
        const primaryUrlTree = this.getOutletUrlTree(urlTree, 'primary');

        const primaryUrl = this._router.serializeUrl(primaryUrlTree);

        if (primaryUrl === this.stack[1]) {
          this.stack.shift()
          this.trigger = 'back';
        } else {
          this.trigger = 'next';
          this.addToStack(primaryUrl);
        }
        sessionStorage.setItem('routingHistory', JSON.stringify(this.stack));
      });
  }


  getOutletUrlTree(urlTree: any, outletName: string) {
    if (urlTree) {
      const outletTree = urlTree.root.children.primary.children[outletName];
      if (outletTree) {
        urlTree.root.children.primary.children = {};
        urlTree.root.children.primary.children[outletName] = outletTree;
      }
    }

    return urlTree;
  }


  addToStack(value: string): void {
    this.stack.unshift(value);
    this.stack.length === this.stackMax && (this.stack.length = this.stackMax);
  }

  update(event) {
    
    console.log(event);
    setTimeout(() => { this.trigger = null },0)
  }



  
  // getOutletUrlTree(urlTree: any, outletName: string) {
  //   const itHasRoot = urlTree.hasOwnProperty('root')

  //   if (itHasRoot) {
  //     urlTree.root.children = this.getOutletUrlTree(urlTree.root.children, outletName)
  //   } else if (urlTree[outletName]) {
  //     const  asd = {};
      
  //     // asd

  //     // asd[outletName].children = this.getOutletUrlTree(urlTree[outletName].children, outletName);

  //     return asd;
  //   }

  //   return urlTree;
  // }





  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData;
  // }

}
