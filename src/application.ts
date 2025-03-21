import { Application, Point, Rectangle, Sprite, Texture } from "pixi.js";
import { appConfig } from "./config";
import { Background } from "./components/background";
import { Container2d, Sprite2d} from 'pixi-projection';
import { getTexture } from "./asset-loader";
import { QuadContainer } from "./quadContainer";


/**
 * The core of the application. 
 * The application is responsible for managing sub components and conducting high level logic flow
 */
export class App extends Application {
    private _bg: Background;

    private _QC: QuadContainer;

    constructor( ){
        super(appConfig.canvas)
        this._bg = new Background();

        const tex = getTexture("turtle");
        const containerSprite = new Sprite2d( tex as any );
        containerSprite.anchor.set(0.5);
        containerSprite.height = 400;
        containerSprite.width = 400;

        const containerSprite2 = new Sprite2d( tex as any );
        containerSprite2.anchor.set(0.5);
        containerSprite2.height = 50;
        containerSprite2.width = 50;
        containerSprite2.x = 250;

        const containerSprite3 = new Sprite2d( tex as any );
        containerSprite3.anchor.set(0.5);
        containerSprite3.height = 50;
        containerSprite3.width = 50;
        containerSprite3.y = 250;

        const containerSprite4 = new Sprite2d( tex as any );
        containerSprite4.anchor.set(0.5);
        containerSprite4.height = 50;
        containerSprite4.width = 50;
        containerSprite4.y = -250;

        

        this._QC = new QuadContainer(400, 400)
        this._QC.addChild(containerSprite, containerSprite2, containerSprite3, containerSprite4);

        this._QC.controlPoints[0].x *= 0.5;
        this._QC.controlPoints[1].x *= 0.5;
        this._QC.controlPoints[0].y *= 0.5;
        this._QC.controlPoints[1].y *= 0.5;
        this._QC.updateProjection();
        
        this.stage.addChild(this._bg, this._QC);
        this.scaleContent(this.screen.width, this.screen.height);
        
        
        //  this._mainScene.convertTo3d();
        
        // listen for window resize wait a frame so content scales after renderer
        window.addEventListener("resize", () => 
            requestAnimationFrame(() => 
                this.scaleContent(this.screen.width, this.screen.height)
            )
        );   
        
        this.ticker.add(function(delta) {
            //
        }, this);
    }
    
    /**
     * call resize handler on components 
    */
   private scaleContent(width: number, height: number): void{
       this._bg.resize(width, height);
       this._QC.x = width / 2;
       this._QC.y = height / 2;
    }
}
