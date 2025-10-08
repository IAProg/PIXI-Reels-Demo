import { IBonusData } from "./types";
import { createRepeatingRange } from "./utils";

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