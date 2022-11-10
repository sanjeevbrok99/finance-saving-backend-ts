import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, OneToMany} from "typeorm";
@Entity( "avatar") 

export class avatar {

    @PrimaryGeneratedColumn() 
    id: number; 

    @Column() 
    avatar_pic: number; 
 
    @Column() 
    category: string; 
}