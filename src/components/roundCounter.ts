import { Container, Point, Sprite, Text, Texture } from "pixi.js";
import { IProgressBarConfig, IRoundCounterConfig } from "../types";

export class RoundCounter extends Container {   
    private _bg: Sprite;
    private _label: Text;

    constructor( config: IRoundCounterConfig ) {
        super();

        const { width, height, bgColour, fontStyle } = config;

        this._bg = new Sprite(Texture.WHITE);
        this._bg.width = width;
        this._bg.height = height;
        this._bg.tint = bgColour;
        this._bg.anchor.set(0.5);

        this._label = new Text("", fontStyle);
        this._label.anchor.set(0.5);

        this.addChild(this._bg, this._label);

        this.resetLabel();
    }

    public addUpdateLabel (tl: gsap.core.Timeline, roundNumber: number, totalRounds: number, triggerTime: number ): number {
        tl.add(() => { this._label.text = `round ${roundNumber+1} of ${totalRounds}`; }, triggerTime);
        return triggerTime;
    }

    public addResetLabel(tl: gsap.core.Timeline, triggerTime: number) : number{
        tl.add(this.resetLabel.bind(this), triggerTime);
        return triggerTime;
    }

    private resetLabel(): void{
        this._label.text = "Idle: Press Play To Start";
    }
}
