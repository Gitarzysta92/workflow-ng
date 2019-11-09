import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-initialization',
  templateUrl: './initialization.component.html',
  styleUrls: ['./initialization.component.css']
})
export class InitializationComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('on init');
    this.router.navigate(['dashboard'], { relativeTo: this.route });
    this.router.navigate([{ outlets: { 'sidebar-left': ['workflow'] }}]);
  }

}
