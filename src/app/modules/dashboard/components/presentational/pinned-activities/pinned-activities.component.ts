import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pinned-activities',
  templateUrl: './pinned-activities.component.html',
  styleUrls: ['./pinned-activities.component.scss']
})
export class PinnedActivitiesComponent implements OnInit {
  
  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
