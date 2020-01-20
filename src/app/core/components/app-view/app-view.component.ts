import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { GridViews } from '@workflow/grid';
import { UserService } from '../../services/shared-api/shared-api.service';


@Component({
  selector: 'app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.scss']
})
export class AppViewComponent {

  gridViews: any;

  constructor() {
    this.gridViews = GridViews;
  }

}
