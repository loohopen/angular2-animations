import { trigger, AnimationEntryMetadata } from '@angular/core';
import { fade, bounce, rotate, slide,zoom } from './animations';

export  function animationFactory (duration: string|number = 500, delay: string|number = 0, easing: string|{} = 'linear'): AnimationEntryMetadata {
    let time, fadeTime, bounceTime, rotateTime, slideTime, zoomTime, tmp;
    tmp = [
        typeof(duration) === 'number' ? `${duration}ms` : duration,
        typeof(delay) === 'number' ? `${delay}ms` : delay
    ].join(' ');
    if (typeof(easing) === 'string') {
        time = tmp + ` ${easing}`;
    } else  if (typeof(easing) === 'object'){
        fadeTime = easing.hasOwnProperty('fade') ? tmp + ` ${easing['fade']}` : tmp + ' linear';
        bounceTime = easing.hasOwnProperty('bounce') ? tmp + ` ${easing['bounce']}` : tmp + ' linear';
        rotateTime = easing.hasOwnProperty('rotate') ? tmp + ` ${easing['rotate']}` : tmp + ' linear';
        slideTime = easing.hasOwnProperty('slide') ? tmp + ` ${easing['slide']}` : tmp + ' linear';
        zoomTime = easing.hasOwnProperty('zoom') ? tmp + ` ${easing['zoom']}` : tmp + ' linear';
    }
    console.log(fadeTime);
    return trigger('animate',[
        ...fade(typeof(easing) === 'string' ? time : fadeTime),
        ...bounce(typeof(easing) === 'string' ? time : bounceTime),
        ...rotate(typeof(easing) === 'string' ? time : rotateTime),
        ...slide(typeof(easing) === 'string' ? time : slideTime),
        ...zoom(typeof(easing) === 'string' ? time : zoomTime)
    ])
}