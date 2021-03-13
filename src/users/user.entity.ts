import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn, Unique, BaseEntity } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @Unique(['username'])
    @Column({ nullable: false })
    username: string

    @Column({ nullable: false })
    @Exclude()
    password: string

}