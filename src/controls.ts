
import { Container, Sprite } from "pixi.js";
import {  ISizeRef } from "./types";
import { appConfig } from "./config";
import { getTexture } from "./asset-loader";


/**
 * The main scene, presents the feature demo
 */
export class Controls extends Container {
    private size: ISizeRef;



    constructor( onClick: (foo: number) => void ) {
        super();
        const { size } = appConfig.mainScene;
        this.size = size;


        const btnA = new Sprite( getTexture("button") );
        btnA.anchor.set( 1, 0.5 );
        btnA.on( "pointerdown", () => onClick(0.5) );
        btnA.interactive = btnA.buttonMode = true;
        btnA.y = -265;

        const btnB = new Sprite( getTexture("button") );
        btnB.anchor.set( 1, 0.5 );
        btnB.on( "pointerdown", () => onClick(1) );
        btnB.interactive = btnB.buttonMode = true;

        const btnC = new Sprite( getTexture("button") );
        btnC.anchor.set( 1, 0.5 );
        btnC.on( "pointerdown", () => onClick(5) );
        btnC.interactive = btnC.buttonMode = true;
        btnC.y = +265;

        this.addChild(btnA, btnB, btnC);

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