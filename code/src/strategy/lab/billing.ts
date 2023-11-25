import { FixedPackage } from "./fixedPackage";
import { HourFlexPackage } from "./hourFlexPackage";
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
        let total = this.calculateMonthlyFee(this.totalHours, this.packageType);
        return total + (total * this.vatRate) / 100;

    }

    private calculateMonthlyFee(total: number, packageType: PackageType): number {
        switch (packageType) {
            case PackageType.FIXED:
                return new FixedPackage().monthlyBill(total);
            case PackageType.HOUR_FLEX:
                return new HourFlexPackage().monthlyBill(total);
            case PackageType.STEPPING:
                return new SteppingPackage().monthlyBill(total);
            default:
                return 0;
        }
    }
}
