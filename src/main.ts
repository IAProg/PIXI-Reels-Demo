import { App } from "./application";
import { loadAssets, loadShapeData } from "./asset-loader";

// simple bootstrap load assets -> start app 
// pixiapp is registered for pixi inspector
loadAssets().then(() => 
    loadShapeData().then(() => {
        new App();
    })
);


