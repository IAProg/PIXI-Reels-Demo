
import { Container } from "pixi.js";
import { IBonusData, ISizeRef } from "./types";
import { appConfig } from "./config";
import { CascadeReel } from "./components/cascade/cascade";
import { BigWin } from "./components/bigWin";

const DUMMY_BONUS = [
    {
        win: 0,
        remainingSpins: 0,
        showBigWin: false,
        showAnticipation: false,
        landing: [1, 2, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    },
    {
        win: 0,
        remainingSpins: 0,
        showBigWin: false,
        showAnticipation: false,
        landing: [1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3]
    },
    {
        win: 0,
        remainingSpins: 0,
        showBigWin: false,
        showAnticipation: false,
        landing: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
    },

] as Array<IBonusData>

/**
 * The main scene, presents the feature demo
 */
export class MainScene extends Container {
    private size: ISizeRef;

    private _cascadeReel: CascadeReel;
    private _bigWin: BigWin;

    constructor() {
        super();
        const { size, cascadeConfig } = appConfig.mainScene;
        this.size = size;

        this._cascadeReel = new CascadeReel(cascadeConfig);
        this._bigWin = new BigWin();

        this.addChild(this._cascadeReel, this._bigWin);
    }

    public playBonus(bonusRound: Array<IBonusData> = DUMMY_BONUS): void {





    }

    /**
     * resize handler.
     * scales to fit the main stage
     * @param width - width of the stage
     * @param height - width of the stage
     */
    public resize(width: number, height: number): void {
        this.scale.set(Math.min(
            width / this.size.width,
            height / this.size.height
        ));


        this.position.set(
            width * 0.50,
            height * 0.50
        )
    }
}