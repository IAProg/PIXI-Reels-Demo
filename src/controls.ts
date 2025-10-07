
import { Container, Sprite } from "pixi.js";
import {  ISizeRef } from "./types";
import { appConfig } from "./config";
import { getTexture } from "./asset-loader";


/**
 * The main scene, presents the feature demo
 */
export class Controls extends Container {
    private size: ISizeRef;

    private _button: Sprite;

    constructor( onClick: () => void ) {
        super();
        const { size } = appConfig.mainScene;
        this.size = size;


        this._button = new Sprite( getTexture("button") );
        this._button.anchor.set( 1, 0.5 );
        this._button.on( "pointerdown", onClick );
        this._button.interactive = this._button.buttonMode = true;

        this.addChild(this._button);

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
            width,
            height * 0.50
        )
    }
}