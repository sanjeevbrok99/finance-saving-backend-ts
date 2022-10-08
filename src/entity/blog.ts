import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, OneToMany} from "typeorm";
@Entity( "blog") 

export class Blog {

    @PrimaryGeneratedColumn() 
    id: number; 

    @Column() 
    title: string; 
 
    @Column() 
    language: string; 
}