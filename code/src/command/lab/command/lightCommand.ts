import { Light } from "../devices";
import { Command } from "./command";

export class LightOnCommand implements Command {
    constructor(private light: Light) { }

    public execute(): void {
        this.light.on();
    }
}

export class LightOffCommand implements Command {
    constructor(private light: Light) { }

    public execute(): void {
        this.light.off();
    }
}