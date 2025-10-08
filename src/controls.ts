
import { Container } from "pixi.js";
import {  ISizeRef } from "./types";
import { appConfig } from "./config";
import { LabelButton } from "./components/labelButton";


/**
 * The main scene, presents the feature demo
 */
export class Controls extends Container {
    private size: ISizeRef;
    
    constructor( callback: (foo: number) => void ) {
        super();
        const { size } = appConfig.mainScene;
        this.size = size;

        const btnA = new LabelButton( "+ 0.1 s", () => callback(0.1) );
        btnA.y = -265;

        const btnB = new LabelButton( "+ 1.0 s", () => callback(1.0) );

        const btnC = new LabelButton( "+ 3.0 s", () => callback(3.0) );
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