import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/shared-api/shared-api.service';

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
    AuthorizedUser.subscribe(isExists => this.isUserExists = isExists);

    
    //this.router.navigate(['dashboard'], { relativeTo: this.route });
    //this.router.navigate([{ outlets: { primary: ['workflow','dashboard'], 'sidebar-left': ['workflow','sidebar'] }}]);
    this.router.navigate([{ outlets: { 'primary': ['dashboard'], 'sidebar-left': ['sidebar-left', 'passedArg'], 'sidebar-right': ['sidebar-right', 'passedArg'] }}], { relativeTo: this.route });

    console.log('on init', this.router, this.route);
  }


}
