export class Light {
    location: string;
    level: number;

    constructor(location: string) {
        this.location = location;
    }

    on(): void {
        this.level = 100;
        console.log(`${this.location} light is on`);
    }

    off(): void {
        this.level = 0;
        console.log(`${this.location} light is off`);
    }

    dim(level: number): void {
        this.level = level;
        if (level === 0) {
            this.off();
        } else {
            console.log(`${this.location} light is dimmed to ${level}%`);
        }
    }

    getLevel(): number {
        return this.level;
    }
}

export class Stereo {
    location: string;

    constructor(location: string) {
        this.location = location;
    }

    on() {
        console.log(`${this.location} stereo is on`);
    }

    off(): void {
        console.log(`${this.location} stereo is off`);
    }

    setCD(): void {
        console.log(`${this.location} stereo is set for CD input`);
    }

    setDVD(): void {
        console.log(`${this.location} stereo is set for DVD input`);
    }

    setRadio(): void {
        console.log(`${this.location} stereo is set for Radio`);
    }

    setVolume(volume: number): void {
        console.log(`${this.location} stereo volume set to ${volume}`);
    }
}

export class CeilingFan {
    location: string;
    speed: number;
    static HIGH: number = 3;
    static MEDIUM: number = 2;
    static LOW: number = 1;
    static OFF: number = 0;

    constructor(location: string) {
        this.location = location;
        this.speed = CeilingFan.OFF;
    }

    high(): void {
        // turns the ceiling fan on to high
        this.speed = CeilingFan.HIGH;
        console.log(`${this.location} ceiling fan is on high`);

    }

    medium(): void {
        // turns the ceiling fan on to medium
        this.speed = CeilingFan.MEDIUM;
        console.log(`${this.location} ceiling fan is on medium`);
    }

    low(): void {
        // turns the ceiling fan on to low
        this.speed = CeilingFan.LOW;
        console.log(`${this.location} ceiling fan is on low`);
    }

    off(): void {
        // turns the ceiling fan off
        this.speed = 0;
        console.log(`${this.location} ceiling fan is off`);
    }

    getSpeed(): number {
        return this.speed;
    }
}

export class TV {
    location: string;
    channel: number;

    constructor(location: string) {
        this.location = location;
    }

    on(): void {
        console.log(`${this.location} TV is on`);
    }

    off(): void {
        console.log(`${this.location} TV is off`);
    }

    setInputChannel(): void {
        this.channel = 3;
        console.log(`${this.location} TV channel is set for DVD`);
    }
}

export class Hottub {
    on() {
        console.log('Hottub is bubbling!');
    }

    off() {
        console.log('Hottub is off');
    }
}
