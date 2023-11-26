import { GashaponCapsule } from "../gashaponCapsule";
import { GashaponMachine } from "../gashaponMachine";
import { GashaponMachineState } from "../gashaponMachineState";
import { GashaponState } from "./gashaponState";

export class HasCoinState implements GashaponState {

    private gashaponMachine: GashaponMachine;

    constructor(gashaponMachine: GashaponMachine) {
        this.gashaponMachine = gashaponMachine;
    }

    insertCoin(): void {
        this.gashaponMachine.addCoin();

        if (this.gashaponMachine.getCoins() < this.gashaponMachine.getNeedCoin()) {
            this.gashaponMachine.setState(GashaponMachineState.hasCoin)
        } else if (this.gashaponMachine.getCoins() === this.gashaponMachine.getNeedCoin()) {
            this.gashaponMachine.setState(GashaponMachineState.readyToSpin)
        }
    }

    ejectCoins(): number {
        this.gashaponMachine.setState(GashaponMachineState.ready)
        return this.gashaponMachine.returnCoins();
    }

    spin(): GashaponCapsule {
        throw new Error("Method not implemented.");
    }

}