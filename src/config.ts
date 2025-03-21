import { IApplicationOptions, ITextStyle } from "pixi.js";
import { ISizeRef } from "./types";


/**
 * config for components of the application - for modular components strict typing would be enforced here 
 */
export const appConfig = {
    canvas:{
        width: 640,
        height: 640,
        antialias: true,
        autoDensity: true,
        resolution: 2,
        resizeTo: window,
        backgroundColor: 0xffffff
    } as Partial<IApplicationOptions>,
    mainScene:{
        size: { width: 540, height: 740 } as ISizeRef,
        title: {
            pos: {x: 0, y: -275},
            style: {
                dropShadow: true,
                dropShadowAlpha: 0.6,
                dropShadowAngle: 1.2,
                dropShadowBlur: 6,
                fill: 0x1d2325,
                fontWeight: "700",
                letterSpacing: 4
            } as Partial<ITextStyle>
        }
    }
} 


