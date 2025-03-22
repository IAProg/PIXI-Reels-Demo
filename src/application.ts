import { Application, Container, Renderer, Ticker} from "pixi.js";
import { appConfig } from "./config";
import { Background } from "./components/background";


/**
 * The core of the application. 
 * The application is responsible for managing sub components and conducting high level logic flow
 */
export class App {
    private _bg: Background;
    private _renderer: Renderer;
    private _stage: Container;

    constructor(){
        // create rendering context
        this._renderer = new Renderer({
            width: 800,
            height: 600,
            backgroundColor: 0x1099bb,
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
        });
        
        document.body.appendChild(this._renderer.view);
        this._stage = new Container();
        
        // create elements
        this._bg = new Background();
        this._stage.addChild(this._bg);

        // scale content to fit window
        this.scaleContent(window.innerWidth, window.innerHeight);
        window.addEventListener("resize", () => 
            this.scaleContent(window.innerWidth, window.innerHeight)
        );   

        // start
        const ticker = new Ticker();
        ticker.add(() => {
            this._renderer.render(this._stage);
        });
        ticker.start();
    }
    
    /**
     * call resize handler on components 
    */
   private scaleContent(width: number, height: number): void{
        this._renderer.resize(width, height);
        this._bg.resize(width, height);
    }
}




