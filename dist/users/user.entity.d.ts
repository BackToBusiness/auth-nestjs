import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    uuid: string;
    username: string;
    password: string;
}
