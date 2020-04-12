import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'content-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() backgroundColor;

  constructor() { }

  ngOnInit() {
  }

}
