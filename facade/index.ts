import {
    Amplifier,
    TheaterLights,
    Tuner,
    PopcornPopper,
    Projector,
    DvdPlayer,
    CdPlayer,
    Screen,
} from './devices';

import {
    HomeTheaterFacade,
} from './classes';

const amp = new Amplifier('Top-O-Line Amplifier');
const tuner = new Tuner('Top-O-Line AM/FM Tuner', amp);
const dvd = new DvdPlayer('Top-O-Line DVD Player', amp);
const cd = new CdPlayer('Top-O-Line CD Player', amp);
const projector = new Projector('Top-O-Line Projector', dvd);
const lights = new TheaterLights('Theater Ceiling Lights');
const screen = new Screen('Theater Screen');
const popper = new PopcornPopper('Popcorn Popper');

const homeTheater =
    new HomeTheaterFacade(amp, tuner, dvd, cd,
        projector, screen, lights, popper);

homeTheater.watchMovie('Raiders of the Lost Ark');
homeTheater.endMovie();
