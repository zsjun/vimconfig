export declare abstract class OssClient {
    config: Record<string, unknown>;
    constructor(config: any);
    abstract putFile(filepath: string, buffer: ReadableStream): Promise<string>;
    abstract deleteFile(url: string): Promise<void>;
}
