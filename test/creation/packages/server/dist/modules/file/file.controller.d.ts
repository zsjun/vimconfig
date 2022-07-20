import { FileService } from './file.service';
import { File } from './file.entity';
export declare class FileController {
    private readonly fileService;
    constructor(fileService: FileService);
    uploadFile(file: any, unique: any): Promise<File>;
    findAll(queryParam: any): Promise<[File[], number]>;
    findById(id: any): Promise<File>;
    deleteById(id: any): Promise<File>;
}
