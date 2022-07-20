export declare function createImage({ html, width, height, ratio, ext }: {
    html: any;
    width: any;
    height: any;
    ratio: any;
    ext?: string;
}): Promise<{
    filepath: string;
    buffer: any;
    size: any;
}>;
