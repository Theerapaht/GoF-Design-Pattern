import { GashaponCapsule } from "./gashaponCapsule";
import { GashaponMachine } from "./gashaponMachine";
import { GashaponMachineState } from "./gashaponMachineState";

describe('[State - lab] Gashapon Machine', () => {

    it('should be ouitOfCapsule when init', () => {
        const gashapon = new GashaponMachine();
        expect(gashapon.getState()).toEqual(GashaponMachineState.outOfCapsule);
    });

    it('should be readyState when reload capsules', () => {
        const gashapon = new GashaponMachine();
        gashapon.reload([
            new GashaponCapsule('luffy'),
            new GashaponCapsule('nami')
        ]);
        expect(gashapon.getState()).toEqual(GashaponMachineState.ready);
        expect(gashapon.getRemainCapsule()).toEqual(2);
    });

    it('should be hasCoin when insert coin', () => {
        const gashapon = new GashaponMachine();
        gashapon.reload([
            new GashaponCapsule('luffy'),
            new GashaponCapsule('nami')
        ]);

        expect(() => gashapon.ejectCoins()).toThrowError("You haven't insert any coins.");

        gashapon.insertCoin();
        expect(gashapon.getState()).toEqual(GashaponMachineState.hasCoin);

        gashapon.insertCoin();
        gashapon.insertCoin();
        gashapon.insertCoin();
        expect(gashapon.getState()).toEqual(GashaponMachineState.readyToSpin);
    });

    it('should be insert coin when hascoin state', () => {
        const gashapon = new GashaponMachine();
        gashapon.reload([
            new GashaponCapsule('luffy'),
            new GashaponCapsule('nami')
        ]);

        gashapon.insertCoin();
        expect(gashapon.getState()).toEqual(GashaponMachineState.hasCoin);
        
        gashapon.insertCoin();
        expect(gashapon.getState()).toEqual(GashaponMachineState.hasCoin);
        
        gashapon.insertCoin();
        gashapon.insertCoin();
        expect(gashapon.getState()).toEqual(GashaponMachineState.readyToSpin);
    });

    // it('should be able to eject coins when hascoin state &&', () => {
    //     const gashapon = new GashaponMachine();
    //     gashapon.reload([
    //         new GashaponCapsule('luffy'),
    //         new GashaponCapsule('nami')
    //     ]);

    //     expect(gashapon.getState()).toEqual(GashaponMachineState.ready);
    //     gashapon.insertCoin();
    //     expect(gashapon.getState()).toEqual(GashaponMachineState.hasCoin);
        
    //     // gashapon.ejectCoins();
    //     expect(gashapon.ejectCoins()).toEqual(1);
    //     // expect(gashapon.getState()).toEqual(GashaponMachineState.ready);
    //     // expect(gashapon.getCoins()).toEqual(0);
    //     // expect(() => gashapon.ejectCoins()).toThrowError("You haven't insert any coins.");
    // });
});