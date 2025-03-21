import { Container2d, Sprite2d } from "pixi-projection";
import { Point, Rectangle, Texture } from "pixi.js";

export class QuadContainer extends Container2d {
    private _rect: Rectangle;
    controlPoints: Array<Point>;
    
    constructor( width: number, height: number ){
        super();

        this._rect = new Rectangle( -width * 0.5, -height *0.5, width, height );
        
        this.controlPoints = [
            new Point(-width * 0.5, -height * 0.5),
            new Point(+width * 0.5, -height * 0.5),
            new Point(+width * 0.5, +height * 0.5),
            new Point(-width * 0.5, +height * 0.5)
        ];
        this.convertSubtreeTo2d!();
        
        //drawDebugPoints
        //for ( const point of this.controlPoints ) {
        //    const debutSprite = new Sprite2d(Texture.WHITE);
        //    debutSprite.position.copyFrom(point);
        //    debutSprite.anchor.set(0.5)
        //    debutSprite.tint = 0xff0000;
        //    this.addChild(debutSprite);
        //}
    }//

    updateProjection(): void{
        this.proj.mapQuad(this._rect, this.controlPoints);
    }

}