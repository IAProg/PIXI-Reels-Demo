import { Point, Sprite, Text } from "pixi.js";
import { getTexture } from "../../asset-loader";

export class CascadeSymbol extends Sprite {   
    private _symbolIndex: number;
    private _homePos: Point;

    constructor( textureName: string, symbolIndex: number, homePos: Point ) {
        super();
        this._symbolIndex = symbolIndex;
        this._homePos = homePos;

        const l = new Text(symbolIndex)
        
        this.anchor.set(0.5);
        this.setTexture( textureName )
        this.position.copyFrom(homePos);

        this.addChild(l)
    }

    get homePos(): Point {
        return this._homePos;
    }

    setTexture( textureName: string ) {
        this.texture = getTexture( textureName );
    }
}
