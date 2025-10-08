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

export interface IPointLike {
    x: number;
    y: number;
}

export interface ICascadeConfig {
    colCount: number;
    rowCount: number;
    symbolWidth: number;
    symbolHeight: number;
    dropTime: number;
    dropStagger: number;
    symbolMap: { [key: number]: string },
    yOut: number;
    yIn: number;
}


export interface IBonusData {
    win: number,
    remainingSpins: number,
    landing: Array<number>,
    showBigWin: boolean,
    showAnticipation: boolean
}