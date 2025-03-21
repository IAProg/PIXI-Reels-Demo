import { Texture, Loader } from "pixi.js";
import { ShapeDefinition } from "./types";


export interface IAssetDefinition {
    name: string;
    url: string;
}


/**
 * asset manifest, lists all assets to be loaded
 * realistically though would be loaded externally
 * 
 */
const textureManifest = [
    { name: "background", url: "background.png"},
    { name: "turtle", url: "turtle.jpg"}
] as Array<IAssetDefinition>

/**
 * object to hold all known textures - this is necessary because the supplied assets mix animations with other textures
 */
const textureCache = {} as { [key: string]: Texture };

/**
 * A simple asset loader. Loading assets from a config allows for some changes to be made without touching the code
 */
export function loadAssets(): Promise<void>{
    const loader = Loader.shared;
    loader.baseUrl = "textures/";

    return new Promise((resolve) => {
        loader.add(textureManifest);

        loader.onLoad.add(( loader, resource ) => {
            // handle texture 
            if ( resource.texture ) {
                textureCache[resource.name] = resource.texture;
            }
        } );

        loader.load(() => resolve());
    });
}


/**
 * A wrapper method used to access textures on the loader, if the requested texture does not exist an error is thrown
 */
export function getTexture(textureName: string): Texture{
    const texture = textureCache[textureName];
    if (texture){
        return texture;
    }
    throw `could not find texture ${textureName}`
}

/**
 * request and return shape data
 */
export async function loadShapeData(): Promise<Array<ShapeDefinition>> {
    const response = await fetch(`data/shapeData.json`);
    const data = await response.json(); 
    if ( response.status !== 200 ){
        throw data;
    }
    return data.Shapes;
}

