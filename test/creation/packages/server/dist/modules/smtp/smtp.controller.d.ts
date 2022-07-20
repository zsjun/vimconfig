import { SMTP } from './smtp.entity';
import { SMTPService } from './smtp.service';
export declare class SMTPController {
    private readonly smtpService;
    constructor(smtpService: SMTPService);
    create(data: any): Promise<SMTP>;
    findAll(queryParam: any): Promise<[SMTP[], number]>;
    deleteById(id: any): Promise<SMTP>;
}
