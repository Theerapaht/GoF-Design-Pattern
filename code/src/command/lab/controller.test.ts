import { GarageDoorDownCommand, GarageDoorLightOffCommand, GarageDoorLightOnCommand, GarageDoorStopCommand, GarageDoorUpCommand } from "./command/garageCommad";
import { LightOffCommand, LightOnCommand } from "./command/lightCommand";
import { Controller } from "./controller";
import { GarageDoor, Light } from "./devices";

describe('[Command - lab] Controller', () => {
    it('should execute device that wrapped with command object', () => {
        const controller = new Controller();
        const light = new Light();
        light.on = jest.fn();
        light.off = jest.fn();

        const lightOnCommad = new LightOnCommand(light);
        const lightOffCommad = new LightOffCommand(light);

        controller.execute(lightOnCommad);
        expect(light.on).toHaveBeenCalled();

        controller.execute(lightOffCommad);
        expect(light.off).toHaveBeenCalled();
    });

    it('should execute device that wrapped with command object [GarageDoor]', () => {
        const controller = new Controller();
        const garageDoor = new GarageDoor();
        garageDoor.up = jest.fn();
        garageDoor.down = jest.fn();
        garageDoor.stop = jest.fn();
        garageDoor.lightOn = jest.fn();
        garageDoor.lightOff = jest.fn();

        const garageDoorUpCommand = new GarageDoorUpCommand(garageDoor);
        const garageDoorDownCommand = new GarageDoorDownCommand(garageDoor);
        const garageDoorStopCommand = new GarageDoorStopCommand(garageDoor);
        const garageDoorLightOnCommand = new GarageDoorLightOnCommand(garageDoor);
        const garageDoorLightOffCommand = new GarageDoorLightOffCommand(garageDoor);

        
        controller.execute(garageDoorUpCommand);
        expect(garageDoor.up).toHaveBeenCalled();
        
        controller.execute(garageDoorDownCommand);
        expect(garageDoor.down).toHaveBeenCalled();
        
        controller.execute(garageDoorStopCommand);
        expect(garageDoor.stop).toHaveBeenCalled();
        
        controller.execute(garageDoorLightOnCommand);
        expect(garageDoor.lightOn).toHaveBeenCalled();
    
        controller.execute(garageDoorLightOffCommand);
        expect(garageDoor.lightOff).toHaveBeenCalled();
    });
});
