import { Container, Point, Sprite, Text } from "pixi.js";
import { getTexture } from "../asset-loader";

export class LabelButton extends Container {   
    private _bg: Sprite;
    private _label: Text;

    constructor( labelString: string, onClick: Function ) {
        super();        
        this._label = new Text(labelString, { fontSize: 50, fontWeight: "bold" });
        this._label.anchor.set( 1, 0.5 );
        
        this._bg = new Sprite(getTexture("button"));
        this._bg.on( "pointerdown", () => onClick(0.1) );
        this._bg.anchor.set( 1, 0.5 );
        
        this.addChild( this._bg, this._label );
        this._bg.interactive = this._bg.buttonMode = true;
    }
}
