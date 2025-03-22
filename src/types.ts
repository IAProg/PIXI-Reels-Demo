export interface IAssetDefinition {
    alias: string;
    src: string;
}

export interface ISizeRef {
    width: number;
    height: number;
}

export interface IAssetManifestResponse {
    mainfest: Array<IAssetDefinition>
}
