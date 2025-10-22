import { Container, Point, Sprite, Texture } from "pixi.js";
import { IProgressBarConfig } from "../types";

export class ProgressBar extends Container {   
    private _bg: Sprite;
    private _bar: Sprite;

    private _barWidth: number;

    constructor( config: IProgressBarConfig ) {
        super();

        const { width, height, bgColour, barColour } = config;

        this._bg = new Sprite(Texture.WHITE);
        this._bg.width = width;
        this._bg.height = height;
        this._bg.tint = bgColour;
        this._bg.anchor.set(0.5);

        this._bar = new Sprite(Texture.WHITE);
        this._bar.width = width;
        this._bar.height = height;
        this._bar.tint = barColour;
        this._bar.anchor.set(0, 0.5);
        this._bar.x = -width / 2

        this._barWidth = width;

        this.addChild(this._bg, this._bar);

        this.reset();
    }

    public addProgressBar (tl: gsap.core.Timeline, triggerTime: number ): number {

        tl.fromTo(this._bar, { width: 0 }, { width: this._barWidth, duration: triggerTime, immediateRender: false }, 0);


        return triggerTime;
    }

    public reset() : void{
        this._bar.width = 0;
    }
}
