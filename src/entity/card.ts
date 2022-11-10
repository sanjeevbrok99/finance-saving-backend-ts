import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Unique, OneToMany} from "typeorm";
@Entity( "card") 

export class card {

    @PrimaryGeneratedColumn() 
    id: number; 

    @Column() 
    created_on: Date; 

}     