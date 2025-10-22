
import { Container, Text } from "pixi.js";
import { IBonusData, ISizeRef } from "./types";
import { appConfig } from "./config";
import { CascadeReel } from "./components/cascade/cascade";
import { BigWin } from "./components/bigWin";
import gsap from "gsap";
import { ProgressBar } from "./components/progressBar";
import { RoundCounter } from "./components/roundCounter";
import { Anticipation } from "./components/anticipation";



/**
 * The main scene, presents the feature demo
 */
export class MainScene extends Container {
    private size: ISizeRef;

    private _progressBar: ProgressBar;
    private _cascadeReel: CascadeReel;
    private _bigWin: BigWin;
    private _anticipation: Anticipation;
    private _roundCounter: RoundCounter;

    private _tl: gsap.core.Timeline;

    constructor() {
        super();
        const { size, cascadeConfig, progressBarConfig, roundCounterConfig } = appConfig.mainScene;
        this.size = size;

        this._bigWin = new BigWin();
        this._anticipation = new Anticipation();
        this._anticipation.x = 550;
        this._cascadeReel = new CascadeReel(cascadeConfig, this._anticipation);

        this._roundCounter = new RoundCounter( roundCounterConfig );
        this._roundCounter.y = 475;

        this._progressBar = new ProgressBar( progressBarConfig );
        this._progressBar.y = -475

        this.addChild(this._cascadeReel, this._bigWin, this._anticipation, this._progressBar, this._roundCounter );

        this._tl = gsap.timeline();
    }

    public async playBonus(bonusRound: Array<IBonusData>): Promise<void> {
        this._tl.progress(1);

        return new Promise((resolve) => {
            this._tl = gsap.timeline({ onComplete: resolve });

            const totalRounds = bonusRound.length;
            let triggerTime = 0;
            let roundIndex = 0;

            for ( const roundData of bonusRound ){
                triggerTime = this._roundCounter.addUpdateLabel( this._tl, roundIndex, totalRounds, triggerTime );
                triggerTime = this._cascadeReel.addCascade( this._tl, roundData.landing, triggerTime, roundData.showAnticipation );

                if ( roundData.showBigWin ){
                    triggerTime = this._bigWin.addBigWin( this._tl, triggerTime );
                }
                roundIndex++;
            }

            triggerTime = this._progressBar.addProgressBar( this._tl, triggerTime );
            triggerTime = this._roundCounter.addResetLabel( this._tl, triggerTime );
        });
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