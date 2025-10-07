import { Sprite } from "pixi.js";
import { getTexture } from "../asset-loader";

export class BigWin extends Sprite {   

    constructor() {
        super( getTexture("bigWin") );
        this.anchor.set(0.5);
    }

}
