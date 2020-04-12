import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { GridViews } from '@workflow/grid';
import { UserService } from '../../services/shared-api/shared-api.service';
import { RouterOutlet, Router, NavigationStart, Route, ActivatedRoute } from '@angular/router';
import { slideInAnimation } from 'src/app/shared/animations/animations';
import { filter, tap } from 'rxjs/operators';


@Component({
  selector: 'app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.scss'],
  animations: [slideInAnimation]
})
export class AppViewComponent implements OnInit {
  @ViewChild('outlet', { static: true }) primaryOutllet: RouterOutlet;
  
  gridViews: any;

  router: Router;
  route: ActivatedRoute;


  trigger: boolean = false;

  constructor(
    router: Router,
    route: ActivatedRoute
  ) {
    this.router = router;
    this.route = route;
    this.gridViews = GridViews;
  }

  ngOnInit(): void {
    

    // this.primaryOutllet.activateEvents.subscribe(result => {
    //   console.log(result);
    //   this.trigger = false;
    // });
    //this.primaryOutllet.deactivateEvents.subscribe(result => console.log(result));

    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event ) => {
        console.log(event);
        this.trigger = !this.trigger;

        const asd = this.router.parseUrl((event as NavigationStart).url);

        const primaryUrl = this.getPrimaryUrl(asd);

      });
  }


  getPrimaryUrl(asd) {
    console.log(asd);
  }

  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData;
  // }

}
