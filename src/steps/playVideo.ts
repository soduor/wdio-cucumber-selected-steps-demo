import { defineTypedStep } from '@jambit/wdio-cucumber-selected-steps/lib/support';
import { playVideo } from '../support/playVideo';

defineTypedStep(/^I play the video$/,
    [],
    playVideo,
)