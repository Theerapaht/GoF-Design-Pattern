import { FixedPackage } from "./fixedPackage";
import { HourFlexPackage } from "./hourFlexPackage";
import { PackageFactory } from "./packageFactory";
import { SteppingPackage } from "./steppingPackage";

export enum PackageType {
    FIXED = 'FIXED',
    HOUR_FLEX = 'HOUR_FLEX',
    STEPPING = 'STEPPING',
    UNKNOWN = 'UNKNOWN',
}

export class Billing {
    private vatRate = 7.0;
    private totalHours: number;
    private packageType: PackageType;

    constructor(totalHours: number, packageType: PackageType) {
        this.totalHours = totalHours;
        this.packageType = packageType;
    }

    public monthlyBill(): number {
        let total = PackageFactory
            .createPackage(this.packageType)
            .monthlyBill(this.totalHours)
        return total + (total * this.vatRate) / 100;
    }
}
