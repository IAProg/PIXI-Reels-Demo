import { IApplicationOptions, ITextStyle } from "pixi.js";
import { ICascadeConfig, ISizeRef } from "./types";


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
        size: { width: 1670, height: 966 } as ISizeRef,
        cascadeConfig: {
            colCount: 5,
            rowCount: 3,
            symbolWidth: 275,
            symbolHeight: 275,
            dropTime: 0.33, 
            dropStagger: 0.025,
            symbolMap:{
                1: "blank",
                2: "cash",
                3: "collector"
            },
            posOut: { x: 0, y: +825}, 
            posIn: { x: 0 , y: -825}
        } as ICascadeConfig
    }
} 


