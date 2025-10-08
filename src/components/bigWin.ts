import { Sprite } from "pixi.js";
import { getTexture } from "../asset-loader";
import { appConfig } from "../config";

export class BigWin extends Sprite {   

    constructor() {
        super( getTexture("bigWin") );
        this.anchor.set(0.5);

        this.visible = false;
    }

    public addBigWin( tl: gsap.core.Timeline, triggerTime: number ): number {
        const { textureFlashOn, textureFlashOff, flashCount, flashDuration } = appConfig.bigWin;

        const texOn = getTexture( textureFlashOn );
        const texOff = getTexture ( textureFlashOff );

        tl.add(() => { this.visible = true; }, triggerTime);
        for ( let i = 0; i < flashCount; i++ ) {
            tl.add(() => { this.texture = texOn }, triggerTime);
            triggerTime += flashDuration;
            tl.add(() => { this.texture = texOff }, triggerTime);
            triggerTime += flashDuration;
        }  
        tl.add(() => { this.visible = false; }, triggerTime);        

        return triggerTime;
    }

}
