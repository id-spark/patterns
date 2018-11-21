export class TheaterLights {
    description: string;

    constructor(description: string) {
        this.description = description;
    }

    on(): void {
        console.log(`${this.description} on`);
    }

    off(): void {
        console.log(`${this.description} off`);
    }

    dim(level: number): void {
        console.log(`${this.description} dimming to ${level}%`);
    }

    toString(): string {
        return this.description;
    }
}

export class Screen {
    description: string;

    constructor(description: string) {
        this.description = description;
    }

    up(): void {
        console.log(`${this.description} going up`);
    }

    down(): void {
        console.log(`${this.description} going down`);
    }

    toString(): string {
        return this.description;
    }
}

export class Projector {
    description: string;
    dvdPlayer: DvdPlayer;

    constructor(description: string, dvdPlayer: DvdPlayer) {
        this.description = description;
        this.dvdPlayer = dvdPlayer;
    }

    on(): void {
        console.log(`${this.description} on`);
    }

    off(): void {
        console.log(`${this.description} off`);
    }

    wideScreenMode(): void {
        console.log(`${this.description} in widescreen mode (16x9 aspect ratio)`);
    }

    tvMode(): void {
        console.log(`${this.description} in tv mode (4x3 aspect ratio)`);
    }

    toString(): string {
        return this.description;
    }
}

export class PopcornPopper {
    description: string;

    constructor(description: string) {
        this.description = description;
    }

    on(): void {
        console.log(`${this.description} on`);
    }

    off(): void {
        console.log(`${this.description} off`);
    }

    pop(): void {
        console.log(`${this.description} popping popcorn!`);
    }

    toString(): string {
        return this.description;
    }
}

export class DvdPlayer {
    description: string;
    currentTrack: number;
    amplifier: Amplifier;
    movie: string;

    constructor(description: string, amplifier: Amplifier) {
        this.description = description;
        this.amplifier = amplifier;
    }

    on(): void {
        console.log(`${this.description} on`);
    }

    off(): void {
        console.log(`${this.description} off`);
    }

    eject(): void {
        this.movie = null;
        console.log(`${this.description} eject`);
    }

    play(movie: string): void {
        this.movie = movie;
        this.currentTrack = 0;
        console.log(`${this.description} playing "${movie}"`);
    }

    stop(): void {
        this.currentTrack = 0;
        console.log(`${this.description} stopped "${this.movie}"`);
    }

    pause(): void {
        console.log(`${this.description} paused "${this.movie}"`);
    }

    setTwoChannelAudio(): void {
        console.log(`${this.description} set two channel audio`);
    }

    setSurroundAudio(): void {
        console.log(`${this.description} set surround audio`);
    }

    toString(): string {
        return this.description;
    }
}

export class CdPlayer {
    description: string;
    currentTrack: number;
    amplifier: Amplifier;
    title: string;

    constructor(description: string, amplifier: Amplifier) {
        this.description = description;
        this.amplifier = amplifier;
    }

    on(): void {
        console.log(`${this.description} on`);
    }

    off(): void {
        console.log(`${this.description} off`);
    }

    eject(): void {
        this.title = null;
        console.log(`${this.description} eject`);
    }

    play(title: string): void {
        this.title = title;
        this.currentTrack = 0;
        console.log(`${this.description} playing "${title}"`);
    }

    stop(): void {
        this.currentTrack = 0;
        console.log(`${this.description} stopped`);
    }

    pause(): void {
        console.log(`${this.description} paused "${this.title}"`);
    }

    toString(): string {
        return this.description;
    }
}

export class Tuner {
    description: string;
    amplifier: Amplifier;
    frequency: number;

    constructor(description: string, amplifier: Amplifier) {
        this.description = description;
        this.amplifier = amplifier;
    }

    on(): void {
        console.log(`${this.description} on`);
    }

    off(): void {
        console.log(`${this.description} off`);
    }

    setFrequency(frequency: number): void {
        console.log(`${this.description} setting frequency to ${frequency}`);
        this.frequency = frequency;
    }

    setAm(): void {
        console.log(`${this.description} setting AM mode`);
    }

    setFm(): void {
        console.log(`${this.description} setting FM mode`);
    }

    toString(): string {
        return this.description;
    }
}

export class Amplifier {
    description: string;
    tuner: Tuner;
    dvd: DvdPlayer;
    cd: CdPlayer;

    constructor(description: string) {
        this.description = description;
    }

    on(): void {
        console.log(`${this.description} on`);
    }

    off(): void {
        console.log(`${this.description} off`);
    }

    setStereoSound(): void {
        console.log(`${this.description} stereo mode on`);
    }

    setSurroundSound(): void {
        console.log(`${this.description} surround sound on (5 speakers, 1 subwoofer)`);
    }

    setVolume(level: number): void {
        console.log(`${this.description} setting volume to ${level}`);
    }

    setTuner(tuner: Tuner): void {
        console.log(`${this.description} setting tuner to ${tuner.toString()}`);
        this.tuner = tuner;
    }

    setDvd(dvd: DvdPlayer): void {
        console.log(`${this.description} setting DVD player to ${dvd.toString()}`);
        this.dvd = dvd;
    }

    setCd(cd: CdPlayer) {
        console.log(`${this.description} setting CD player to ${cd.toString()}`);
        this.cd = cd;
    }

    public toString(): string {
        return this.description;
    }
}
