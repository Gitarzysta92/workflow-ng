import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

const asd = value => {
  console.log(value)
  return value;
};


export const slideInAnimation =
  trigger('routeAnimations', [
    // transition(':enter', [
    //   query('@*', animateChild()),
    //   style({ opacity: 0 }), animate('1100ms', style({ opacity: 1 }))]
    // ),
    // transition(':leave', [
    //   query('@*', animateChild()),
    //   style({ opacity: 1 }), animate('1100ms', style({ opacity: 0 }))]
    // ),
    transition('* <=> *', [
      group([
        
        // query('app-dashboard-master', [
        //   style({ opacity: 1 }),
        //   animate('19600ms ease-out', style({ opacity: 0 }))
        // ], { optional: true }),

        query(':enter', style({  transform: 'translate(100%, 0)', display: 'inline-block', position: 'absolute', left: '0', right: '0' })),
        query(':enter', [
          animate('400ms ease-out', style({ transform: 'translate(0)', display: 'block', position: 'absolute', left: '0', right: '0' }))
        ], { optional: true }),


        query(':leave', style({ transform: 'translate(0)', display: 'block', position: 'absolute', left: '0', right: '0' }), { optional: true }),
        query(':leave', [
          animate('400ms ease-out', style({ transform: 'translate(-100%, 0)', display: 'block', position: 'absolute', left: '0', right: '0' }))
        ], { optional: true })
      ]),

    ]),
  ]);