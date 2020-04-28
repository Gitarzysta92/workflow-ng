import { trigger, transition, style, query, group, animate } from '@angular/animations';



const asd = {
  display: 'block', 
  position: 'absolute',
  height: '100%',
  overflow: 'hidden',
  left: 0, 
  right: 0
}


export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* => next', [
      group([
        query(':enter', style({  transform: 'translate(100%, 0)', ...asd })),
        query(':enter', [
          animate('400ms 400ms ease-in-out', style({ transform: 'translate(0)', ...asd }))
        ], { optional: true }),

        query(':leave', style({ transform: 'translate(0)', ...asd }), { optional: true }),
        query(':leave', [
          animate('400ms ease-in-out', style({ transform: 'translate(-100%, 0)', ...asd }))
        ], { optional: true })
      ]),
    ]),

    transition('* => back', [
      group([
        query(':enter', style({  transform: 'translate(-100%, 0)', ...asd })),
        query(':enter', [
          animate('400ms 400ms ease-in-out', style({ transform: 'translate(0)', ...asd }))
        ], { optional: true }),


        query(':leave', style({ transform: 'translate(0)', ...asd }), { optional: true }),
        query(':leave', [
          animate('400ms ease-in-out', style({ transform: 'translate(100%, 0)', ...asd }))
        ], { optional: true })
      ]),
    ]),



  ]);







          // query('app-dashboard-master', [
        //   style({ opacity: 1 }),
        //   animate('19600ms ease-out', style({ opacity: 0 }))
        // ], { optional: true }),


            // transition(':enter', [
    //   query('@*', animateChild()),
    //   style({ opacity: 0 }), animate('1100ms', style({ opacity: 1 }))]
    // ),
    // transition(':leave', [
    //   query('@*', animateChild()),
    //   style({ opacity: 1 }), animate('1100ms', style({ opacity: 0 }))]
    // ),