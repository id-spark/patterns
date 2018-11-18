import {CeilingFan, Light, Stereo, TV, Hottub} from './devices';

export interface Command {
    execute(): void;
    undo(): void;
}

export class NoCommand implements Command {
    execute(): void {}
    undo(): void {}
}

export class MacroCommand implements Command {
    commands: Command[];

    constructor(commands: Command[]) {
        this.commands = commands;
    }

    execute(): void {
        for (let i = 0; i < this.commands.length; i++) {
            this.commands[i].execute();
        }
    }

    undo(): void {
        for (let i = 0; i < this.commands.length; i++) {
            this.commands[i].undo();
        }
    }
}

export class LightOnCommand implements Command {
    light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.on();
    }

    undo(): void {
        this.light.off();
    }
}

export class LightOffCommand implements Command {
    light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.off();
    }

    undo(): void {
        this.light.on();
    }
}

export class CeilingFanOnCommand implements Command {
    ceilingFan: CeilingFan;

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }

    execute(): void {
        this.ceilingFan.high();
    }

    undo(): void {
        this.ceilingFan.off();
    }
}

export class CeilingFanOffCommand implements Command {
    ceilingFan: CeilingFan;

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }

    execute(): void {
        this.ceilingFan.off();
    }

    undo(): void {
        this.ceilingFan.high();
    }
}

export class CeilingFanHighCommand implements Command {
    ceilingFan: CeilingFan;
    prevSpeed: number;

    constructor(ceilindFan: CeilingFan) {
        this.ceilingFan = ceilindFan;
    }

    execute(): void {
        this.prevSpeed = this.ceilingFan.getSpeed();
        this.ceilingFan.high();
    }

    undo(): void {
        switch (this.prevSpeed) {
            case CeilingFan.HIGH:
                this.ceilingFan.high();
                break;
            case CeilingFan.MEDIUM:
                this.ceilingFan.medium();
                break;
            case CeilingFan.LOW:
                this.ceilingFan.low();
                break;
            case CeilingFan.OFF:
                this.ceilingFan.off();
                break;
        }
    }
}

export class StereoWithCDCommand implements Command {
    stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    execute(): void {
        this.stereo.on();
        this.stereo.setCD();
        this.stereo.setVolume(11);
    }

    undo(): void {
        this.stereo.off();
    }
}

export class StereoOnCommand implements Command {
    stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    execute(): void {
        this.stereo.on();
    }

    undo(): void {
        this.stereo.off();
    }
}

export class StereoOffCommand implements Command {
    stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    execute(): void {
        this.stereo.off();
    }

    undo(): void {
        this.stereo.on();
    }
}

export class TVOnCommand implements Command {
    tv: TV;

    constructor(tv: TV) {
        this.tv = tv;
    }

    execute(): void {
        this.tv.on();
    }

    undo(): void {
        this.tv.off();
    }
}

export class TVOffCommand implements Command {
    tv: TV;

    constructor(tv: TV) {
        this.tv = tv;
    }

    execute(): void {
        this.tv.off();
    }

    undo(): void {
        this.tv.on();
    }
}

export class HottubOnCommand implements Command {
    hottub: Hottub;

    constructor(hottub: Hottub) {
        this.hottub = hottub;
    }

    execute(): void {
        this.hottub.on();
    }

    undo(): void {
        this.hottub.off();
    }
}

export class HottubOffCommand implements Command {
    hottub: Hottub;

    constructor(hottub: Hottub) {
        this.hottub = hottub;
    }

    execute(): void {
        this.hottub.off();
    }

    undo(): void {
        this.hottub.on();
    }
}
