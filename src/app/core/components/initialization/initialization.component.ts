import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GridViews } from '@workflow/grid';

import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-initialization',
  templateUrl: './initialization.component.html',
  styleUrls: ['./initialization.component.css']
})
export class InitializationComponent implements OnInit {

  isUserExists: boolean;
  gridViews: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private readonly userService: UserService,
  ) {}

  ngOnInit() {
    this.gridViews = GridViews;


    const AuthorizedUser = this.userService.getAsyncUserData();
    AuthorizedUser.subscribe(isExists => {
      if (isExists) {
        this.router.navigate([{ outlets: { 'primary': ['dashboard'], 'app-view-left-sidebar': ['left-sidebar'], 'app-view-right-sidebar': ['right-sidebar'] }}], { relativeTo: this.route });
      } else {
        this.router.navigate([{ outlets: { 'primary': [''], 'app-view-left-sidebar': null, 'app-view-right-sidebar': null }}]);
      } 
    });

    
    //this.router.navigate(['dashboard'], { relativeTo: this.route });
    //this.router.navigate([{ outlets: { primary: ['workflow','dashboard'], 'sidebar-left': ['workflow','sidebar'] }}]);
    

    console.log('on init', this.router, this.route);
  }


}
