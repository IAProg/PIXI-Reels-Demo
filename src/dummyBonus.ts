import { IBonusData } from "./types";
import { createRepeatingRange, randomInt } from "./utils";

export const DUMMY_BONUS = [
    {
        win: 0,
        remainingSpins: 0,
        showBigWin: Math.random() > 0.6,
        showAnticipation: false,
        landing: createRepeatingRange(15, 1, 3)
    },
    {
        win: 0,
        remainingSpins: 0,
        showBigWin: Math.random() > 0.6,
        showAnticipation: false,
        landing: createRepeatingRange(15, 1, 3)
    },
    {
        win: 0,
        remainingSpins: 0,
        showBigWin: Math.random() > 0.6,
        showAnticipation: false,
        landing: createRepeatingRange(15, 1, 3)
    },
    {
        win: 0,
        remainingSpins: 0,
        showBigWin: Math.random() > 0.6,
        showAnticipation: false,
        landing: createRepeatingRange(15, 1, 3)
    },
    {
        win: 0,
        remainingSpins: 0,
        showBigWin: Math.random() > 0.6,
        showAnticipation: false,
        landing: createRepeatingRange(15, 1, 3)
    },
    {
        win: 0,
        remainingSpins: 0,
        showBigWin: Math.random() > 0.6,
        showAnticipation: false,
        landing: createRepeatingRange(15, 1, 3)
    },
    {
        win: 0,
        remainingSpins: 0,
        showBigWin: Math.random() > 0.6,
        showAnticipation: false,
        landing: createRepeatingRange(15, 1, 3)
    },
    {
        win: 0,
        remainingSpins: 0,
        showBigWin: Math.random() > 0.6,
        showAnticipation: false,
        landing: createRepeatingRange(15, 1, 3)
    },
    {
        win: 0,
        remainingSpins: 0,
        showBigWin: Math.random() > 0.6,
        showAnticipation: false,
        landing: createRepeatingRange(15, 1, 3)
    },
    {
        win: 0,
        remainingSpins: 0,
        showBigWin: Math.random() > 0.6,
        showAnticipation: false,
        landing: createRepeatingRange(15, 1, 3)
    }

] as Array<IBonusData>

export function getDummyBonus(): Array<IBonusData> {
    return new Array(randomInt(10, 20)).fill(0).map(() => {
        return {
            win: 0,
            remainingSpins: 0,
            showBigWin: Math.random() > 0.6,
            showAnticipation: Math.random() > 0.6,
            landing: createRepeatingRange(15, 1, 3)
        }
    } );
}