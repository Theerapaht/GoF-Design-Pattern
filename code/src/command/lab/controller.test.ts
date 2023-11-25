import { LightOffCommand, LightOnCommand } from "./command/lightCommand";
import { Controller } from "./controller";
import { Light } from "./devices";

describe('[Command - lab] Controller', () => {
    it('should execute device taht wrapped with command object', () => {
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
});
