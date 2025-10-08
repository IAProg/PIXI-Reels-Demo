
import { Container } from "pixi.js";
import { IBonusData, ISizeRef } from "./types";
import { appConfig } from "./config";
import { CascadeReel } from "./components/cascade/cascade";
import { BigWin } from "./components/bigWin";
import gsap from "gsap";
import { DUMMY_BONUS } from "./dummyBonus";



/**
 * The main scene, presents the feature demo
 */
export class MainScene extends Container {
    private size: ISizeRef;

    private _cascadeReel: CascadeReel;
    private _bigWin: BigWin;

    private _tl: gsap.core.Timeline;

    constructor() {
        super();
        const { size, cascadeConfig } = appConfig.mainScene;
        this.size = size;

        this._cascadeReel = new CascadeReel(cascadeConfig);
        this._bigWin = new BigWin();

        this.addChild(this._cascadeReel, this._bigWin);

        this._tl = gsap.timeline();

        this.playBonus();
    }

    public async playBonus(bonusRound: Array<IBonusData> = DUMMY_BONUS): Promise<void> {
        this._tl?.kill();

        return new Promise((resolve) => {
            this._tl = gsap.timeline({ onComplete: resolve });

            let triggerTime = 0;

            for ( const round of bonusRound ) {
                triggerTime = this._cascadeReel.addCascade( this._tl, round.landing, triggerTime );

                if ( round.showBigWin ){
                    // 
                }
              //  console.log(triggerTime)

            }

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