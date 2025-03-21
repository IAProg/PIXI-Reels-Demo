
import { Container, Sprite, Text } from "pixi.js";
import { ISizeRef, ShapeDefinition } from "./types";
import { appConfig } from "./config";
import { SelectionList } from "./utils";
import { getTexture } from "./asset-loader";

/**
 * The main scene, presents the shape visualiser demo
 */
export class MainScene extends Container {
    private size: ISizeRef;
    private _title: Text;
    private _bg: Sprite;
    private _shapeStore: SelectionList<ShapeDefinition>;

    constructor( shapeData: Array<ShapeDefinition> ){
        super();
        this._shapeStore = new SelectionList( shapeData );

        const { size, title } = appConfig.mainScene;
        this.size = size;

        this._title = new Text( this._shapeStore.currentValue.name, title.style );
        this._title.anchor.set(0.5, 0);
        this._title.position.copyFrom(title.pos);

        this._bg = new Sprite( getTexture("turtle") );
        this._bg.anchor.set(0.5);

        this.addChild( this._title, this._bg );
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