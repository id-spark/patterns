import {Command, NoCommand} from './commands';

export class RemoteControl {
    onCommands: Command[];
    offCommands: Command[];
    undoCommand: Command;

    constructor(slotsNum: number = 7) {
        const noCommand: Command = new NoCommand();
        this.onCommands = new Array(slotsNum);
        this.offCommands = new Array(slotsNum);

        for (let i = 0; i < slotsNum; i++) {
            this.onCommands[i] = noCommand;
            this.offCommands[i] = noCommand;
        }
        this.undoCommand = noCommand;
    }

    setCommand(slot: number, onCommand: Command, offCommand: Command): void {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    onButtonWasPushed(slot: number) {
        this.onCommands[slot].execute();
        this.undoCommand = this.onCommands[slot];
    }

    offButtonWasPushed(slot: number) {
        this.offCommands[slot].execute();
        this.undoCommand = this.offCommands[slot];
    }

    undoButtonWasPushed(): void {
        this.undoCommand.undo();
    }

    toString(): string {
        let str = '\n------ Remote Control ------\n';
        for (let i = 0; i < this.onCommands.length; i++) {
            str += `[slot ${i}] ${this.onCommands[i].constructor.name}    ${this.offCommands[i].constructor.name}\n`;
        }
        str += `[undo] ${this.undoCommand.constructor.name}\n`;
        return str;
    }
}
