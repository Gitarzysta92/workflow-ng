import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'newest-activities',
  templateUrl: './newest-activities.component.html',
  styleUrls: ['./newest-activities.component.scss']
})
export class NewestActivitiesComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
