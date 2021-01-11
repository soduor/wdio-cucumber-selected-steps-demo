import {elementQuery} from '@jambit/wdio-cucumber-selected-steps/lib/support';

/**
 * I play a video
 */
export const playVideo = () => {
    //const video = elementQuery('Test Day Tips Video')
    browser.execute("arguments[0].play();",elementQuery('video'));
}

/**
 * This one works
 */
/*export const playVideo = () => {
    //const video = elementQuery('Test Day Tips Video')
    browser.execute("arguments[0].play();", $('video'));
}*/