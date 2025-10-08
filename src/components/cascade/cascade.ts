import { Container, Graphics, Point, Sprite } from "pixi.js";
import { ICascadeConfig } from "../../types";
import { CascadeSymbol } from "./symbol";
import { getTexture } from "../../asset-loader";
import gsap from "gsap";
import { delay } from "../../utils";

export class CascadeReel extends Container {
    private _symbols: Array<CascadeSymbol>;
    private _backer: Sprite;
    private _tl: gsap.core.Timeline;
    private _config: ICascadeConfig;

    constructor(config: ICascadeConfig) {
        super();
        this._config = config;
        const { colCount, rowCount, symbolWidth, symbolHeight } = this._config;

        this._symbols = [];

        this._tl = gsap.timeline();

        this._backer = new Sprite(getTexture("reelsBacker"));
        this._backer.anchor.set(0.5);

        let symbolIndex = 0;
        const symbolContainer = new Container();
        for (let col = 0; col < colCount; col++) {
            for (let row = 0; row < rowCount; row++) {
                const homePos = new Point(
                    (symbolWidth * 0.5) + (symbolWidth * col),
                    (symbolHeight * 0.5) + (symbolHeight * row)
                );
                const symbol = new CascadeSymbol("blank", symbolIndex, homePos);

                this._symbols.push(symbol);
                symbolIndex++;
            }
        }

        symbolContainer.addChild(... this._symbols);
        symbolContainer.x -= symbolContainer.width / 2;
        symbolContainer.y -= symbolContainer.height / 2;

        const mask = new Graphics()
            .beginFill(0xffffff)
            .drawRect(0, 0, this._backer.width, this._backer.height)
            .endFill();
        symbolContainer.addChild(mask);
        symbolContainer.mask = mask;

        this.addChild(this._backer, symbolContainer);
    }

    async playCascade(landing: Array<number>): Promise<void> {
        this._tl?.kill();

        return new Promise((resolve) => {
            this._tl = gsap.timeline({ onComplete: resolve });


            let triggerTime = 0;

            triggerTime += this._addCascade( this._tl, this._symbols, "out", triggerTime );

            // set skin
            for (let i = this._symbols.length - 1; i >= 0; i--) {
                const targetSymbol = this._symbols[i];
                const symbolID = landing[i];
                const symbolSkin = this._config.symbolMap[symbolID];
                this._tl.add(() => { targetSymbol.texture = getTexture(symbolSkin); }, triggerTime);
            }

            triggerTime += this._addCascade( this._tl, this._symbols, "in", triggerTime );





        });
    }

    private _addCascade(tl: gsap.core.Timeline, symbols: Array<CascadeSymbol>, mode: "in" | "out", triggerTime: number ): number {
        const { dropTime, dropStagger, yOut, yIn } = this._config;

        for (let i = symbols.length - 1; i >= 0; i--) {
            const targetSymbol = symbols[i];

            const homeY = targetSymbol.homePos.y;
            const outY = mode === "out" ? (homeY + yOut) : (homeY + yIn);

            const start = mode === "out" ? homeY: outY;
            const end = mode === "out" ? outY: homeY;
            const ease = mode === "out" ? "power2.in" : "power2.out";


            tl.fromTo(targetSymbol, { y: start }, { y: end, ease, duration: dropTime, immediateRender: false }, triggerTime);
            triggerTime += dropStagger;
        }
        triggerTime += dropTime;


        return triggerTime;
    }
}
