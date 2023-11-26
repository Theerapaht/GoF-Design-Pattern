import { GashaponCapsule } from "./gashaponCapsule";
import { GashaponMachineState } from "./gashaponMachineState";
import { GashaponState } from "./states/gashaponState";
import { ReadyState } from "./states/readyState";

export class GashaponMachine {
    private coins: number = 0;

    getCoins(): number {
        return this.coins;
    }

    addCoin(): void {
        this.coins++;
    }

    private needCoins = 4;
    getNeedCoin(): number {
        return this.needCoins;
    }

    private state: GashaponMachineState = GashaponMachineState.outOfCapsule;
    private machineState: GashaponState | undefined;

    setState(state: GashaponMachineState) {
        this.state = state;
        if (this.state === GashaponMachineState.ready) {
            this.machineState = new ReadyState(this);
        }
    }

    getState(): GashaponMachineState {
        return this.state;
    }

    private capsule: GashaponCapsule[] = [];

    reload(capsules: GashaponCapsule[]): void {
        this.capsule = [...this.capsule, ...capsules];
        this.setState(GashaponMachineState.ready);
    }

    getRemainCapsule(): number {
        return this.capsule.length;
    }


    insertCoin(): void {
        if (this.machineState == null) return;
        this.machineState.insertCoin();
    }

    ejectCoins(): number {
        if (this.machineState == null) return 0;
        this.coins = 0;
        return this.machineState.ejectCoins();
    }

    returnCoins(): number {
        const coin = this.coins;
        this.coins = 0;
        return coin;
    }
}