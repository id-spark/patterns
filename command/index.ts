import {RemoteControl} from './remote-control';
import {CeilingFan, Light, Stereo, TV, Hottub} from './devices';
import {
    LightOnCommand,
    LightOffCommand,
    StereoWithCDCommand,
    StereoOffCommand,
    StereoOnCommand,
    CeilingFanOnCommand,
    CeilingFanOffCommand,
    TVOffCommand,
    TVOnCommand,
    HottubOffCommand,
    HottubOnCommand,
    MacroCommand
} from './commands';

const remoteControl = new RemoteControl();

const livingRoomLight = new Light('Living Room');
const kitchenLight = new Light('Kitchen');
const ceilingFan = new CeilingFan('Living Room');
const stereo = new Stereo('Living Room');
const tv = new TV('Living Room');
const hottub = new Hottub();

const livingRoomLightOn = new LightOnCommand(livingRoomLight);
const livingRoomLightOff = new LightOffCommand(livingRoomLight);
const kitchenLightOn = new LightOnCommand(kitchenLight);
const kitchenLightOff = new LightOffCommand(kitchenLight);
const ceilingFanOn = new CeilingFanOnCommand(ceilingFan);
const ceilingFanOff = new CeilingFanOffCommand(ceilingFan);
const stereoOnWithCD = new StereoWithCDCommand(stereo);
const stereoOn = new StereoOnCommand(stereo);
const stereoOff = new StereoOffCommand(stereo);
const tvOn = new TVOnCommand(tv);
const tvOff = new TVOffCommand(tv);
const hottubOn = new HottubOnCommand(hottub);
const hottubOff = new HottubOffCommand(hottub);

const macroCommandOn = new MacroCommand([livingRoomLightOn, stereoOn, tvOn, hottubOn]);
const macroCommandOff = new MacroCommand([livingRoomLightOff, stereoOff, tvOff, hottubOff]);


remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);
remoteControl.setCommand(2, ceilingFanOn, ceilingFanOff);
remoteControl.setCommand(3, stereoOnWithCD, stereoOff);
remoteControl.setCommand(4, macroCommandOn, macroCommandOff);

console.log(remoteControl.toString());

remoteControl.onButtonWasPushed(0);
remoteControl.offButtonWasPushed(0);
remoteControl.onButtonWasPushed(1);
remoteControl.offButtonWasPushed(1);
remoteControl.onButtonWasPushed(2);
remoteControl.offButtonWasPushed(2);
remoteControl.onButtonWasPushed(3);
remoteControl.offButtonWasPushed(3);

console.log(remoteControl.toString());

console.log('\n------ Macro On -----')
remoteControl.onButtonWasPushed(4);
console.log('\n------ Macro Off -----')
remoteControl.offButtonWasPushed(4);

console.log(remoteControl.toString());

remoteControl.undoButtonWasPushed();

console.log(remoteControl.toString());
