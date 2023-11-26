import { GashaponCapsule } from "../gashaponCapsule";
import { GashaponMachine } from "../gashaponMachine";
import { GashaponMachineState } from "../gashaponMachineState";
import { GashaponState } from "./gashaponState";

export class ReadyState implements GashaponState {

    private gashaponMachine: GashaponMachine;

    constructor(gashaponMachine: GashaponMachine) {
        this.gashaponMachine = gashaponMachine;
    }

    insertCoin(): void {
        this.gashaponMachine.addCoin();

        if (this.gashaponMachine.getCoins() < this.gashaponMachine.getNeedCoin()) {
            this.gashaponMachine.setState(GashaponMachineState.hasCoin)
        } else {
            this.gashaponMachine.setState(GashaponMachineState.readyToSpin)
        }

    }

    ejectCoins(): number {
        throw new Error("You haven't insert any coins.");
    }

    spin(): GashaponCapsule {
        throw new Error("Please insert more coin.");
    }

}