import { Component, OnInit, ViewChild, ElementRef, HostListener, Input, EventEmitter, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationEvent,
  // ...
} from '@angular/animations';
import { Observable, Subject, timer } from 'rxjs';
import { skipUntil, takeUntil, throttle, delay, finalize, auditTime, audit } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile-tile',
  host: {
    '[class.collapsed]' : 'isCollapsed', 
  },  
  animations: [
    trigger('openClose', [
      state('open', style({
        //backgroundColor: '{{ bgColor }}',
        width: '100%'
      }), { params: { bgColor: '#000' } }),
      state('closed', style({
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
        opacity: 1,
        transform: 'translate(0)'
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
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ opacity: 0,  position: 'absolute' }),
            animate('0.2s  ease-in-out', 
                    style({  opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ opacity: 1, position: 'absolute' }),
            animate('0.2s ease-in-out', 
                    style({ opacity: 0 }))
          ]
        )
      ]
    )
  ],
  templateUrl: './user-profile-tile.component.html',
  styleUrls: ['./user-profile-tile.component.scss']
})
export class UserProfileTileComponent implements OnInit, OnDestroy {

  @ViewChild('tile', { static: true }) tile:ElementRef;
  @Input() collapsed: Observable<boolean>;

  public isCollapsed: boolean = false;

  private _isOpenState: EventEmitter<boolean> = new EventEmitter();

  private _isDestroyed: Subject<void> = new Subject();

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event) {
    this._isOpenState.next(true); 
  }

  @HostListener('mouseleave', ['$event'])
  onMouseleave(event) {
    this._isOpenState.next(false);    
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

    //this.isOpen = true;


    let delayTime = 250;

    this.collapsed
      .subscribe(value => {
        this.isCollapsed = value;
        //delayTime = 210;
      });

    this._isOpenState
      .pipe(takeUntil(this._isDestroyed))
      .pipe(audit(() => timer(delayTime)))
      .subscribe(value => {
        //delayTime = 0;
        this.isOpen = value;
      });
        
  }

  ngOnDestroy() {
    this._isDestroyed.next();
  }

}
