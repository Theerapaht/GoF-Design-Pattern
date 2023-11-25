import { GarageDoor } from "../devices";
import { Command } from "./command";

export class GarageDoorLightOnCommand implements Command {
    constructor(private garage: GarageDoor) { }

    public execute(): void {
        this.garage.lightOn();
    }
}

export class GarageDoorLightOffCommand implements Command {
    constructor(private garage: GarageDoor) { }

    public execute(): void {
        this.garage.lightOff();
    }
}

export class GarageDoorUpCommand implements Command {
    constructor(private garage: GarageDoor) { }

    public execute(): void {
        this.garage.up();
    }
}

export class GarageDoorDownCommand implements Command {
    constructor(private garage: GarageDoor) { }

    public execute(): void {
        this.garage.down();
    }
}

export class GarageDoorStopCommand implements Command {
    constructor(private garage: GarageDoor) { }

    public execute(): void {
        this.garage.stop();
    }
}
