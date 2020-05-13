import { Component, OnInit, ViewChild, ElementRef, HostListener, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-user-profile-tile',
  animations: [
    trigger('openClose', [
      state('open', style({
        //backgroundColor: '{{ bgColor }}',
        width: '100%'
      }), { params: { bgColor: '#000' } }),
      state('closed', style({
        width: '10px'
        //backgroundColor: 'transparent'
      })),
      transition('open => closed', [
        animate('0.3s ease-in-out')
      ]),
      transition('closed => open', [
        animate('0.3s {{ delay }}ms ease-in-out')
      ], { params: { delay: 200 }}),
    ]),
    trigger('fadeOutRight', [
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0,
        transform: 'translate(120px)'
      })),
      transition('* => *', [
        animate('0.3s {{ delay }}ms ease-in-out')
      ], { params: { delay: 200 }}),
    ]),
    trigger('fadeOutTop', [
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0,
        transform: 'translate(0px, -40px)'
      })),
      transition('visible => invisible', [
        animate('0.2s  ease-in-out')
      ], { params: { delay: 200 }}),
      transition('invisible => visible', [
        animate('0.2s {{ delay }}ms ease-in-out')
      ], { params: { delay: 200 }}),
    ]),
  ],
  templateUrl: './user-profile-tile.component.html',
  styleUrls: ['./user-profile-tile.component.scss']
})
export class UserProfileTileComponent implements OnInit {

  @ViewChild('tile', { static: true }) tile:ElementRef;
  @Input() isCollapsed: boolean = false;

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event) {
    this.isOpen = true;    
  }

  @HostListener('mouseleave', ['$event'])
  onMouseleave(event) {
    this.isOpen = false;    
  }

  fullImagePath: string;
  accentColor: string;
  isOpen: boolean = false;
  params: any;

  isExpanded: boolean = true;

  constructor() { 
    this.fullImagePath = '/assets/images/avatar.jpg';
    this.accentColor = '#a0f4d3';
    this.params = { bgColor: this.accentColor }
  
  }

  ngOnInit() {
    
    //console.log(this.gridView.collapse());
    //console.log(this.tile.onmouseover());
  }

}
