import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { GridViews } from '@workflow/grid';
import { UserService } from '../../services/shared-api/shared-api.service';
import { RouterOutlet, Router, NavigationStart, Route, ActivatedRoute, UrlTree } from '@angular/router';
import { slideInAnimation } from 'src/app/shared/animations/animations';
import { filter, tap } from 'rxjs/operators';


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

  router: Router;
  route: ActivatedRoute;


  stack: Array<string>;
  stackMax: number;

  trigger: string;

  constructor(
    router: Router,
    route: ActivatedRoute
  ) {
    this.router = router;
    this.route = route;
    this.gridViews = GridViews;

    this.stack = [];
    this.stackMax = 10;
  }

  ngOnInit(): void {

    const asd = JSON.parse(sessionStorage.getItem('routingHistory'));

    this.stack = asd || [];

    // this.primaryOutllet.activateEvents.subscribe(result => {
    //   console.log(result);
    //   this.trigger = false;
    // });
    //this.primaryOutllet.deactivateEvents.subscribe(result => console.log(result));

    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event ) => {
        //this.trigger = !this.trigger;

        const urlTree = this.router.parseUrl((event as NavigationStart).url);
        const primaryUrlTree = this.getOutletUrlTree(urlTree, 'primary');
        const primaryUrl = this.router.serializeUrl(primaryUrlTree);

        console.log(primaryUrl, this.stack[1]);

        if (primaryUrl === this.stack[1]) {
          this.stack.shift()
          this.trigger = 'back';
        } else {
          this.trigger = 'next';
          this.addToStack(primaryUrl);
        }

        console.log(this.trigger);

        sessionStorage.setItem('routingHistory', JSON.stringify(this.stack));
      });
  }


  getOutletUrlTree(urlTree: any, outletName: string) {
    if (urlTree) {
      const outletTree = urlTree.root.children.primary.children[outletName];
      urlTree.root.children.primary.children = {};
      urlTree.root.children.primary.children[outletName] = outletTree;
    }

    return urlTree;
  }


  addToStack(value: string): void {
    this.stack.unshift(value);
    this.stack.length === this.stackMax && (this.stack.length = this.stackMax);
  }

  update() {
    this.trigger = null;
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
