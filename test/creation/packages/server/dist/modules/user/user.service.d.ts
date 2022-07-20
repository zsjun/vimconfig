import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private readonly userRepository;
    private readonly configService;
    constructor(userRepository: Repository<User>, configService: ConfigService);
    findAll(queryParams: any): Promise<[User[], number]>;
    createUser(user: Partial<User>): Promise<User>;
    login(user: Partial<User>): Promise<User>;
    findById(id: any): Promise<User>;
    updateById(id: any, user: any): Promise<User>;
    updatePassword(id: any, user: any): Promise<User>;
}
