import { style, state, animate, transition, keyframes, AnimationMetadata } from '@angular/core';
export const fade = (time: string): AnimationMetadata[] => [
    state('fadeOut', style({
        display: 'none'
    })),
    state('fadeOutLeft', style({
        display: 'none'
    })),
    state('fadeOutRight', style({
        display: 'none'
    })),
    state('fadeOutDown', style({
        display: 'none'
    })),
    state('fadeOutUp', style({
        display: 'none'
    })),
    transition('* => fadeIn', [
        animate(time, keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 1, offset: 1 })
        ]))
    ]),
    transition('* => fadeIn', [
        animate(time, keyframes([
            style({ opacity: 0, offset: 0 }),
            style({ opacity: 1, offset: 1 })
        ]))
    ]),
    transition('fadeIn => void, * => fadeOut', [
        animate(time, keyframes([
            style({ opacity: 1, offset: 0 }),
            style({ opacity: 0, offset: 1 })
        ]))
    ]),
    transition('* => fadeInDown', [
        animate(time, keyframes([
            style({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 0 }),
            style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
        ]))
    ]),
    transition('fadeInDown => void, * => fadeOutDown', [
        animate(time, keyframes([
            style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
            style({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 1 })
        ]))
    ]),
    transition('* => fadeInLeft', [
        animate(time, keyframes([
            style({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 0 }),
            style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
        ]))
    ]),
    transition('fadeInLeft => void, * => fadeOutRight', [
        animate(time, keyframes([
            style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
            style({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 1 })
        ]))
    ]),
    transition('* => fadeInRight', [
        animate(time, keyframes([
            style({ opacity: 0, transform: 'translate3d(100%, 0, 0)', offset: 0 }),
            style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
        ]))
    ]),
    transition('fadeInRight => void, * => fadeOutLeft', [
        animate(time, keyframes([
            style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
            style({ opacity: 0, transform: 'translate3d(-100%, 0, 0)', offset: 1 })
        ]))
    ]),
    transition('* => fadeInUp', [
        animate(time, keyframes([
            style({ opacity: 0, transform: 'translate3d(0, 100%, 0)', offset: 0 }),
            style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 1 })
        ]))
    ]),
    transition('fadeInUp => void, * => fadeOutUp', [
        animate(time, keyframes([
            style({ opacity: 1, transform: 'translate3d(0, 0, 0)', offset: 0 }),
            style({ opacity: 0, transform: 'translate3d(0, -100%, 0)', offset: 1 })
        ]))
    ])
];


export const bounce = (time: string): AnimationMetadata[] => [
    state('bounceOut', style({
        display: 'none'
    })),
    state('bounceOutDown', style({
        display: 'none'
    })),
    state('bounceOutLeft', style({
        display: 'none'
    })),
    state('bounceOutRight', style({
        display: 'none'
    })),
    state('bounceOutUp', style({
        display: 'none'
    })),
    transition('* => bounceIn', [
        animate(time, keyframes([
            style({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 0 }),
            style({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }),
            style({ transform: 'scale3d(.9, .9, .9)', offset: 0.4 }),
            style({ transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6 }),
            style({ transform: 'scale3d(.97, .97, .97)', offset: 0.8 }),
            style({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 })
        ]))
    ]),
    transition('bounceIn => void, * => bounceOut', [
        animate(time, keyframes([
            style({ transform: 'scale3d(.9, .9, .9)', offset: 0.2 }),
            style({ opacity: 1, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.5 }),
            style({ opacity: 0, transform: 'scale3d(.3, .3, .3)', offset: 1 }),
        ]))
    ]),
    transition('* => bounceInDown', [
        animate(time, keyframes([
            style({ opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 0 }),
            style({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.6 }),
            style({ transform: 'translate3d(0, -10px, 0)', offset: 0.75 }),
            style({ transform: 'translate3d(0, 5px, 0)', offset: 0.9 }),
            style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
        ]))
    ]),
    transition('bounceInDown => void, * => bounceOutDown', [
        animate(time, keyframes([
            style({ transform: 'translate3d(0, 10px, 0)', offset: 0.2 }),
            style({ opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.5 }),
            style({ opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 1 })
        ]))
    ]),
    transition('* => bounceInLeft', [
        animate(time, keyframes([
            style({ opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 0 }),
            style({ opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.6 }),
            style({ transform: 'translate3d(-10px, 0, 0)', offset: 0.75 }),
            style({ transform: 'translate3d(5px, 0, 0)', offset: 0.9 }),
            style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
        ]))
    ]),
    transition('bounceInLeft => void, * => bounceOutRight', [
        animate(time, keyframes([
            style({ opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.2 }),
            style({ opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 1 })
        ]))
    ]),
    transition('* => bounceInRight', [
        animate(time, keyframes([
            style({ opacity: 0, transform: 'translate3d(1000px, 0, 0)', offset: 0 }),
            style({ opacity: 1, transform: 'translate3d(-20px, 0, 0)', offset: 0.6 }),
            style({ transform: 'translate3d(10px, 0, 0)', offset: 0.75 }),
            style({ transform: 'translate3d(-5px, 0, 0)', offset: 0.9 }),
            style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
        ]))
    ]),
    transition('bounceInRight => void, * => bounceOutLeft', [
        animate(time, keyframes([
            style({ opacity: 1, transform: 'translate3d(20px, 0, 0)', offset: 0.2 }),
            style({ opacity: 0, transform: 'translate3d(-1000px, 0, 0)', offset: 1 })
        ]))
    ]),
    transition('* => bounceInUp', [
        animate(time, keyframes([
            style({ opacity: 0, transform: 'translate3d(0, 1000px, 0)', offset: 0 }),
            style({ opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.6 }),
            style({ transform: 'translate3d(0, 10px, 0)', offset: 0.75 }),
            style({ transform: 'translate3d(0, -5px, 0)', offset: 0.9 }),
            style({ transform: 'translate3d(0, 0, 0)', offset: 1 })
        ]))
    ]),
    transition('bounceInUp => void, * => bounceOutUp', [
        animate(time, keyframes([
            style({ transform: 'translate3d(0, -10px, 0)', offset: 0.2 }),
            style({ opacity: 1, transform: 'translate3d(0, 20px, 0)', offset: 0.5 }),
            style({ opacity: 0, transform: 'translate3d(0, -1000px, 0)', offset: 1 })
        ]))
    ])
];

export const rotate = (time: string): AnimationMetadata[] => [
    state('rotateOut', style({
        display: 'none'
    })),
    state('rotateOutDownLeft', style({
        display: 'none'
    })),
    state('rotateOutDownRight', style({
        display: 'none'
    })),
    state('rotateOutUpLeft', style({
        display: 'none'
    })),
    state('rotateOutUpRight', style({
        display: 'none'
    })),
    transition('* => rotateIn', [
        animate(time, keyframes([
            style({opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, -200deg)', offset: 0}),
            style({opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
        ]))
    ]),
    transition('rotateIn => void, * => rotateOut', [
        animate(time, keyframes([
            style({opacity: 1, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
            style({opacity: 0, transformOrigin: 'center', transform: 'rotate3d(0, 0, 1, 200deg)', offset: 1})
        ]))
    ]),
    transition('* => rotateInDownLeft', [
        animate(time, keyframes([
            style({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0}),
            style({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
        ]))
    ]),
    transition('rotateInDownLeft => void, * => rotateOutDownLeft', [
        animate(time, keyframes([
            style({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
            style({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1})
        ]))
    ]),
    transition('* => rotateInDownRight', [
        animate(time, keyframes([
            style({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0}),
            style({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
        ]))
    ]),
    transition('rotateInDownRight => void, * => rotateOutDownRight', [
        animate(time, keyframes([
            style({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
            style({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1})
        ]))
    ]),
    transition('* => rotateInUpLeft', [
        animate(time, keyframes([
            style({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 0}),
            style({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
        ]))
    ]),
    transition('rotateInUpLeft => void, * => rotateOutUpLeft', [
        animate(time, keyframes([
            style({opacity: 1, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
            style({opacity: 0, transformOrigin: 'left bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 1})
        ]))
    ]),
    transition('* => rotateInUpRight', [
        animate(time, keyframes([
            style({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, -45deg)', offset: 0}),
            style({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 1})
        ]))
    ]),
    transition('rotateInUpRight => void, * => rotateOutUpRight', [
        animate(time, keyframes([
            style({opacity: 1, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 0deg)', offset: 0}),
            style({opacity: 0, transformOrigin: 'right bottom', transform: 'rotate3d(0, 0, 1, 45deg)', offset: 1})
        ]))
    ])
];

export const slide = (time: string): AnimationMetadata[] => [
    state('slideOutDown', style({
        display: 'none'
    })),
    state('slideOutLeft', style({
        display: 'none'
    })),
    state('slideOutRight', style({
        display: 'none'
    })),
    state('slideOutUp', style({
        display: 'none'
    })),
    transition('* => slideInDown', [
        animate(time, keyframes([
            style({transform: 'translate3d(0, -100%, 0)', offset: 0}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('slideInDown => void, * => slideOutDown', [
        animate(time, keyframes([
            style({transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'translate3d(0, 100%, 0)', offset: 1})
        ]))
    ]),
    transition('* => slideInLeft', [
        animate(time, keyframes([
            style({transform: 'translate3d(-100%, 0, 0)', offset: 0}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('slideInLeft => void, * => slideOutRight', [
        animate(time, keyframes([
            style({transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'translate3d(100%, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => slideInRight', [
        animate(time, keyframes([
            style({transform: 'translate3d(100%, 0, 0)', offset: 0}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('slideInRight => void, * => slideOutLeft', [
        animate(time, keyframes([
            style({transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'translate3d(-100%, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => slideInUp', [
        animate(time, keyframes([
            style({transform: 'translate3d(0, 100%, 0)', offset: 0}),
            style({transform: 'translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('slideInUp => void, * => slideOutUp', [
        animate(time, keyframes([
            style({transform: 'translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'translate3d(0, -100%, 0)', offset: 1})
        ]))
    ])
];

export const zoom = (time: string): AnimationMetadata[] => [
    state('zoomOut', style({
        display: 'none'
    })),
    state('zoomOutDown', style({
        display: 'none'
    })),
    state('zoomOutLeft', style({
        display: 'none'
    })),
    state('zoomOutRight', style({
        display: 'none'
    })),
    state('zoomOutUp', style({
        display: 'none'
    })),
    transition('* => zoomIn', [
        animate(time, keyframes([
            style({opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 0}),
            style({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1})
        ]))
    ]),
    transition('zoomIn => void, * => zoomOut', [
        animate(time, keyframes([
            style({opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 0}),
            style({opacity: 0, transform: 'scale3d(.1, .1, .1)', offset: 1})
        ]))
    ]),
    transition('* => zoomInDown', [
        animate(time, keyframes([
            style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 0}),
            style({opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.6}),
            style({transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('zoomInDown => void, * => zoomOutDown', [
        animate(time, keyframes([
            style({opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)', offset: 0.4}),
            style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 1})
        ]))
    ]),
    transition('* => zoomInLeft', [
        animate(time, keyframes([
            style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 0}),
            style({opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6}),
            style({transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('zoomInLeft => void, * => zoomOutRight', [
        animate(time, keyframes([
            style({opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6}),
            style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => zoomInRight', [
        animate(time, keyframes([
            style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(1000px, 0, 0)', offset: 0}),
            style({opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(-10px, 0, 0)', offset: 0.6}),
            style({transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('zoomInRight => void, * => zoomOutLeft', [
        animate(time, keyframes([
            style({opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'scale3d(.475, .475, .475) translate3d(10px, 0, 0)', offset: 0.6}),
            style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(-1000px, 0, 0)', offset: 1})
        ]))
    ]),
    transition('* => zoomInUp', [
        animate(time, keyframes([
            style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, 1000px, 0)', offset: 0}),
            style({opacity: 1, transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.6}),
            style({transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 1})
        ]))
    ]),
    transition('zoomInUp => void, * => zoomOutUp', [
        animate(time, keyframes([
            style({opacity: 1, transform: 'scale3d(1, 1, 1) translate3d(0, 0, 0)', offset: 0}),
            style({transform: 'scale3d(.475, .475, .475) translate3d(0, -60px, 0)', offset: 0.4}),
            style({opacity: 0, transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)', offset: 1})
        ]))
    ])
];