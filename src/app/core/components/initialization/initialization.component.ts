import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-initialization',
  templateUrl: './initialization.component.html',
  styleUrls: ['./initialization.component.css']
})
export class InitializationComponent implements OnInit {

  isUserExists: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private readonly userService: UserService,
  ) {}

  ngOnInit() {

    const AuthorizedUser = this.userService.getAsyncUserData();
    AuthorizedUser.subscribe(isExists => {
      if (isExists) {
        this.router.navigate([{ outlets: { 'primary': ['dashboard'], 'sidebar-left': ['sidebar-left', 'passedArg'], 'sidebar-right': ['sidebar-right', 'passedArg'] }}], { relativeTo: this.route });
      } else {
        this.router.navigate([{ outlets: { 'primary': [''], 'sidebar-left': null, 'sidebar-right': null }}]);
      } 
    });

    
    //this.router.navigate(['dashboard'], { relativeTo: this.route });
    //this.router.navigate([{ outlets: { primary: ['workflow','dashboard'], 'sidebar-left': ['workflow','sidebar'] }}]);
    

    console.log('on init', this.router, this.route);
  }


}
