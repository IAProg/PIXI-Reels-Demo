
import { Container } from "pixi.js";
import { ISizeRef } from "./types";
import { appConfig } from "./config";

/**
 * The main scene, presents the shape visualiser demo
 */
export class MainScene extends Container {
    private size: ISizeRef;

    constructor(){
        super();
        const { size } = appConfig.mainScene;
        this.size = size;

    }

    /**
     * resize handler.
     * scales to fit the main stage
     * @param width - width of the stage
     * @param height - width of the stage
     */
    public resize(width: number, height: number): void{
        this.scale.set(Math.min(
            width  / this.size.width,
            height / this.size.height
        ));

        this.position.set(
            width * 0.50,
            height * 0.50
        )
    }

}