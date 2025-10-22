import { IBonusData } from "./types";
import { createRepeatingRange, randomInt } from "./utils";

export function getDummyBonus(): Array<IBonusData> {
    return new Array(randomInt(20, 40)).fill(0).map(() => {
        return {
            win: 0,
            remainingSpins: 0,
            showBigWin: Math.random() > 0.6,
            showAnticipation: Math.random() > 0.6,
            landing: createRepeatingRange(15, 1, 3)
        }
    } );
}