import { Component, OnInit, Input } from '@angular/core';
import { GridView } from '@workflow/grid';

@Component({
  selector: 'app-switch-expand',
  templateUrl: './switch-expand.component.html',
  styleUrls: ['./switch-expand.component.scss']
})
export class SwitchExpandComponent implements OnInit {
  @Input() gridView: GridView;

  state: boolean = true;

  constructor() { }

  ngOnInit() {
    
    //this.gridView
  }

  toggleState() {
    this.state = !this.state;
    if (this.state) {
      this.gridView.collapse()
    } else {
      this.gridView.expand()
    }
  }

}
